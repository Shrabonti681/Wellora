export type DoseStatus = 'pending' | 'taken' | 'skipped' | 'missed';
export interface User { id:string; fullName:string; email:string }
export interface FamilyProfile { id:string; fullName:string; relationship:string; dateOfBirth:string; gender:string; notes?:string; periodTrackingEnabled:boolean; avatar?:string }
export interface Medicine { id:string; profileId:string; name:string; genericName?:string; dosageAmount:number; dosageUnit:string; form:string; instructions:string; schedule:string[]; currentStock:number; lowStockThreshold:number; stockUnit:string; active:boolean }
export interface DoseLog { id:string; medicineId:string; profileId:string; scheduledAt:string; status:DoseStatus; quantityUsed:number }
export interface Notification { id:string; profileId:string; type:'dose'|'missed'|'low-stock'|'streak'|'period'|'general'; title:string; message:string; isRead:boolean; createdAt:string }
export interface PeriodRecord { id:string; profileId:string; startDate:string; endDate:string; flowLevel:'Spotting'|'Light'|'Medium'|'Heavy'; symptoms:string[]; notes?:string }
export interface Streak { profileId:string; current:number; longest:number; totalSuccessfulDays:number; weeklyAdherence:number; monthlyAdherence:number }
