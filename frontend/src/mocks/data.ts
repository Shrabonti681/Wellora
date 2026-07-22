import type { DoseLog, FamilyProfile, Medicine, Notification, PeriodRecord, Streak, User } from '../types';
export const demoUser: User = { id:'u1', fullName:'Sarah Ahmed', email:'demo@wellora.app' };
export const profiles: FamilyProfile[] = [
 {id:'p1',fullName:'Sarah Ahmed',relationship:'Self',dateOfBirth:'1997-08-14',gender:'Female',periodTrackingEnabled:true,notes:'Primary account holder'},
 {id:'p2',fullName:'Ayaan Ahmed',relationship:'Son',dateOfBirth:'2017-04-05',gender:'Male',periodTrackingEnabled:false},
 {id:'p3',fullName:'Rahman Ahmed',relationship:'Father',dateOfBirth:'1958-12-22',gender:'Male',periodTrackingEnabled:false}
];
export const medicines: Medicine[] = [
 {id:'m1',profileId:'p1',name:'Vitamin D',genericName:'Cholecalciferol',dosageAmount:1000,dosageUnit:'unit',form:'Tablet',instructions:'Take after breakfast',schedule:['08:00'],currentStock:18,lowStockThreshold:7,stockUnit:'tablets',active:true},
 {id:'m2',profileId:'p1',name:'Iron Plus',dosageAmount:65,dosageUnit:'mg',form:'Tablet',instructions:'Take with water',schedule:['21:00'],currentStock:5,lowStockThreshold:7,stockUnit:'tablets',active:true},
 {id:'m3',profileId:'p2',name:'Allergy Relief',genericName:'Cetirizine',dosageAmount:5,dosageUnit:'mg',form:'Syrup',instructions:'Use measuring spoon',schedule:['20:00'],currentStock:120,lowStockThreshold:30,stockUnit:'ml',active:true},
 {id:'m4',profileId:'p3',name:'Metformin',dosageAmount:500,dosageUnit:'mg',form:'Tablet',instructions:'Take with meals',schedule:['08:00','20:00'],currentStock:42,lowStockThreshold:12,stockUnit:'tablets',active:true},
 {id:'m5',profileId:'p3',name:'Amlodipine',dosageAmount:5,dosageUnit:'mg',form:'Tablet',instructions:'Take at the same time daily',schedule:['09:00'],currentStock:9,lowStockThreshold:10,stockUnit:'tablets',active:true},
 {id:'m6',profileId:'p1',name:'Magnesium',dosageAmount:200,dosageUnit:'mg',form:'Capsule',instructions:'Take before sleep',schedule:['22:00'],currentStock:24,lowStockThreshold:8,stockUnit:'capsules',active:true}
];
export const doses: DoseLog[] = [
 {id:'d1',medicineId:'m1',profileId:'p1',scheduledAt:'08:00',status:'taken',quantityUsed:1},
 {id:'d2',medicineId:'m2',profileId:'p1',scheduledAt:'21:00',status:'pending',quantityUsed:1},
 {id:'d3',medicineId:'m6',profileId:'p1',scheduledAt:'22:00',status:'pending',quantityUsed:1},
 {id:'d4',medicineId:'m3',profileId:'p2',scheduledAt:'20:00',status:'skipped',quantityUsed:5},
 {id:'d5',medicineId:'m4',profileId:'p3',scheduledAt:'08:00',status:'taken',quantityUsed:1},
 {id:'d6',medicineId:'m4',profileId:'p3',scheduledAt:'20:00',status:'pending',quantityUsed:1},
 {id:'d7',medicineId:'m5',profileId:'p3',scheduledAt:'09:00',status:'missed',quantityUsed:1}
];
export const streaks: Streak[] = [
 {profileId:'p1',current:6,longest:21,totalSuccessfulDays:48,weeklyAdherence:92,monthlyAdherence:88},
 {profileId:'p2',current:2,longest:8,totalSuccessfulDays:19,weeklyAdherence:72,monthlyAdherence:74},
 {profileId:'p3',current:11,longest:34,totalSuccessfulDays:90,weeklyAdherence:86,monthlyAdherence:81}
];
export const periodRecords: PeriodRecord[] = [
 {id:'r1',profileId:'p1',startDate:'2026-06-22',endDate:'2026-06-27',flowLevel:'Medium',symptoms:['Cramps','Fatigue']},
 {id:'r2',profileId:'p1',startDate:'2026-05-25',endDate:'2026-05-30',flowLevel:'Medium',symptoms:['Bloating']},
 {id:'r3',profileId:'p1',startDate:'2026-04-27',endDate:'2026-05-02',flowLevel:'Heavy',symptoms:['Headache','Cramps']},
 {id:'r4',profileId:'p1',startDate:'2026-03-30',endDate:'2026-04-04',flowLevel:'Light',symptoms:['Mood changes']}
];
export const notifications: Notification[] = [
 {id:'n1',profileId:'p1',type:'low-stock',title:'Iron Plus is running low',message:'Only 5 tablets remain. Consider arranging a refill.',isRead:false,createdAt:'Today, 9:10 AM'},
 {id:'n2',profileId:'p1',type:'streak',title:'Six-day streak',message:'Sarah is one day away from the 7-day achievement.',isRead:false,createdAt:'Today, 8:05 AM'},
 {id:'n3',profileId:'p3',type:'missed',title:'Missed dose',message:'Rahman missed Amlodipine at 9:00 AM.',isRead:false,createdAt:'Today, 10:00 AM'},
 {id:'n4',profileId:'p2',type:'dose',title:'Dose due soon',message:'Ayaan has Allergy Relief scheduled at 8:00 PM.',isRead:true,createdAt:'Yesterday'},
 {id:'n5',profileId:'p1',type:'period',title:'Period estimate',message:'The next period is estimated in about 4 days.',isRead:true,createdAt:'Yesterday'},
 {id:'n6',profileId:'p3',type:'low-stock',title:'Amlodipine is running low',message:'Stock has reached the configured threshold.',isRead:false,createdAt:'2 days ago'}
];
