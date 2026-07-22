import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { demoUser, doses as initialDoses, medicines as initialMedicines, notifications as initialNotifications, periodRecords as initialPeriods, profiles as initialProfiles, streaks } from '../mocks/data';
import type { DoseLog, FamilyProfile, Medicine, Notification, PeriodRecord, User } from '../types';

type AppState = { user:User|null; selectedProfileId:string; profiles:FamilyProfile[]; medicines:Medicine[]; doses:DoseLog[]; notifications:Notification[]; periods:PeriodRecord[]; login:(email:string,password:string)=>boolean; logout:()=>void; selectProfile:(id:string)=>void; addProfile:(p:Omit<FamilyProfile,'id'>)=>void; addMedicine:(m:Omit<Medicine,'id'>)=>void; updateDose:(id:string,status:DoseLog['status'])=>void; refill:(id:string,qty:number)=>void; markRead:(id:string)=>void; markAllRead:()=>void; addPeriod:(r:Omit<PeriodRecord,'id'>)=>void };
const Ctx=createContext<AppState|null>(null);
export function AppProvider({children}:{children:ReactNode}){
 const [user,setUser]=useState<User|null>(()=>localStorage.getItem('wellora-auth')?demoUser:null);
 const [selectedProfileId,setSelectedProfileId]=useState('p1');
 const [profiles,setProfiles]=useState(initialProfiles); const [medicines,setMedicines]=useState(initialMedicines); const [doses,setDoses]=useState(initialDoses); const [notifications,setNotifications]=useState(initialNotifications); const [periods,setPeriods]=useState(initialPeriods);
 const login=(email:string,password:string)=>{ const ok=email==='demo@wellora.app'&&password==='Demo123!'; if(ok){setUser(demoUser);localStorage.setItem('wellora-auth','1')} return ok };
 const logout=()=>{setUser(null);localStorage.removeItem('wellora-auth')};
 const addProfile=(p:Omit<FamilyProfile,'id'>)=>setProfiles(v=>[...v,{...p,id:crypto.randomUUID()}]);
 const addMedicine=(m:Omit<Medicine,'id'>)=>setMedicines(v=>[...v,{...m,id:crypto.randomUUID()}]);
 const updateDose=(id:string,status:DoseLog['status'])=>{ const old=doses.find(d=>d.id===id); if(!old||old.status===status)return; setDoses(v=>v.map(d=>d.id===id?{...d,status}:d)); if(old.status!=='taken'&&status==='taken')setMedicines(v=>v.map(m=>m.id===old.medicineId?{...m,currentStock:Math.max(0,m.currentStock-old.quantityUsed)}:m)); if(old.status==='taken'&&status!=='taken')setMedicines(v=>v.map(m=>m.id===old.medicineId?{...m,currentStock:m.currentStock+old.quantityUsed}:m)); };
 const refill=(id:string,qty:number)=>setMedicines(v=>v.map(m=>m.id===id?{...m,currentStock:m.currentStock+qty}:m));
 const markRead=(id:string)=>setNotifications(v=>v.map(n=>n.id===id?{...n,isRead:true}:n)); const markAllRead=()=>setNotifications(v=>v.map(n=>({...n,isRead:true})));
 const addPeriod=(r:Omit<PeriodRecord,'id'>)=>setPeriods(v=>[{...r,id:crypto.randomUUID()},...v]);
 const value=useMemo(()=>({user,selectedProfileId,profiles,medicines,doses,notifications,periods,login,logout,selectProfile:setSelectedProfileId,addProfile,addMedicine,updateDose,refill,markRead,markAllRead,addPeriod}),[user,selectedProfileId,profiles,medicines,doses,notifications,periods]);
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export function useApp(){const c=useContext(Ctx);if(!c)throw new Error('useApp must be inside AppProvider');return c}
export { streaks };
