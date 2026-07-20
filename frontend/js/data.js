/* Wellora — shared mock data (frontend only, no backend). */
const WELLORA_DATA = {
  currentUser: { name: "Rheetam", initials: "R" },

  profiles: [
    { id: "rheetam", name: "Rheetam", relationship: "Myself", initials: "R", activeMedicines: 3, dosesTotal: 5, dosesTaken: 3 },
    { id: "mother", name: "Mother", relationship: "Mother", initials: "M", activeMedicines: 4, dosesTotal: 4, dosesTaken: 4 },
    { id: "father", name: "Father", relationship: "Father", initials: "F", activeMedicines: 2, dosesTotal: 2, dosesTaken: 1 },
  ],

  medicines: [
    {
      id: "metformin", name: "Metformin", strength: "500 mg", form: "Tablet", for: "Rheetam",
      status: "Active", instructions: "Take one tablet after breakfast and one after dinner.",
      prescriber: "Dr Sarah Lee", pharmacy: "Greenline Pharmacy",
      startDate: "1 Jul 2026", endDate: "—", expiryDate: "20 Feb 2027",
      stock: 18, unit: "tablets", dailyUse: 2, daysLeft: 9, runOutDate: "24 Jul 2026",
      refillThreshold: 8, stockStatus: "low",
      schedule: [
        { time: "8:00 AM", label: "After breakfast" },
        { time: "8:00 PM", label: "After dinner" }
      ],
      adherence: { taken: 11, missed: 1, skipped: 0, late: 2, rate: 91.7 },
      prescriptionFile: "Metformin Prescription – July 2026"
    },
    {
      id: "vitamind", name: "Vitamin D", strength: "1,000 IU", form: "Capsule", for: "Mother",
      status: "Active", instructions: "Take one capsule after lunch.",
      prescriber: "Dr Amelia Ross", pharmacy: "Greenline Pharmacy",
      startDate: "12 May 2026", endDate: "—", expiryDate: "10 Oct 2026",
      stock: 24, unit: "capsules", dailyUse: 1, daysLeft: 24, runOutDate: "10 Aug 2026",
      refillThreshold: 10, stockStatus: "good",
      schedule: [{ time: "1:00 PM", label: "After lunch" }],
      adherence: { taken: 18, missed: 0, skipped: 1, late: 1, rate: 94.7 },
      prescriptionFile: "Vitamin D Prescription – May 2026"
    },
    {
      id: "paracetamol", name: "Paracetamol", strength: "500 mg", form: "Tablet", for: "Family",
      status: "Active", instructions: "Take as needed for pain or fever, up to three times daily.",
      prescriber: "—", pharmacy: "Greenline Pharmacy",
      startDate: "—", endDate: "—", expiryDate: "15 Dec 2026",
      stock: 8, unit: "tablets", dailyUse: 0, daysLeft: null, runOutDate: "—",
      refillThreshold: 10, stockStatus: "low",
      schedule: [{ time: "As needed", label: "For pain or fever" }],
      adherence: { taken: 4, missed: 0, skipped: 0, late: 0, rate: 100 },
      prescriptionFile: null
    },
    {
      id: "amlodipine", name: "Amlodipine", strength: "5 mg", form: "Tablet", for: "Father",
      status: "Active", instructions: "Take one tablet each morning.",
      prescriber: "Dr Sarah Lee", pharmacy: "Riverside Pharmacy",
      startDate: "3 Jan 2026", endDate: "—", expiryDate: "5 Mar 2027",
      stock: 42, unit: "tablets", dailyUse: 1, daysLeft: 42, runOutDate: "28 Aug 2026",
      refillThreshold: 10, stockStatus: "good",
      schedule: [{ time: "7:30 AM", label: "Before breakfast" }],
      adherence: { taken: 22, missed: 2, skipped: 0, late: 0, rate: 91.7 },
      prescriptionFile: "Amlodipine Prescription – Jan 2026"
    },
    {
      id: "atorvastatin", name: "Atorvastatin", strength: "10 mg", form: "Tablet", for: "Father",
      status: "Active", instructions: "Take one tablet at bedtime.",
      prescriber: "Dr Sarah Lee", pharmacy: "Riverside Pharmacy",
      startDate: "3 Jan 2026", endDate: "—", expiryDate: "5 Mar 2027",
      stock: 3, unit: "tablets", dailyUse: 1, daysLeft: 3, runOutDate: "20 Jul 2026",
      refillThreshold: 8, stockStatus: "critical",
      schedule: [{ time: "9:30 PM", label: "At bedtime" }],
      adherence: { taken: 20, missed: 0, skipped: 0, late: 4, rate: 100 },
      prescriptionFile: "Atorvastatin Prescription – Jan 2026"
    }
  ],

  todayDoses: [
    { time: "7:30 AM", medicine: "Amlodipine 5 mg", for: "Father", instructions: "Before breakfast", status: "taken", takenAt: "7:34 AM" },
    { time: "8:00 AM", medicine: "Metformin 500 mg", for: "Rheetam", instructions: "After breakfast", status: "taken", takenAt: "8:12 AM" },
    { time: "8:00 AM", medicine: "Vitamin D 1,000 IU", for: "Mother", instructions: "After breakfast", status: "taken", takenAt: "8:05 AM" },
    { time: "1:00 PM", medicine: "Vitamin D 1,000 IU", for: "Mother", instructions: "After lunch", status: "missed" },
    { time: "8:00 PM", medicine: "Metformin 500 mg", for: "Rheetam", instructions: "After dinner", status: "upcoming" },
    { time: "9:30 PM", medicine: "Atorvastatin 10 mg", for: "Father", instructions: "At bedtime", status: "upcoming" }
  ],

  inventoryTransactions: [
    { date: "15 Jul 2026, 8:12 AM", change: "-1 tablet", reason: "Morning dose marked as taken", by: "Rheetam", type: "deduction" },
    { date: "14 Jul 2026, 6:30 PM", change: "+30 tablets", reason: "Pharmacy purchase", by: "Rheetam", type: "added" },
    { date: "10 Jul 2026, 10:15 AM", change: "-5 tablets", reason: "Quantity correction — incorrect opening balance", by: "Rheetam", type: "adjustment" },
    { date: "3 Jul 2026, 4:00 PM", change: "+60 tablets", reason: "Pharmacy purchase", by: "Rheetam", type: "added" },
    { date: "28 Jun 2026, 9:00 AM", change: "-2 capsules", reason: "Damaged in transit", by: "Caregiver — Anika", type: "damaged" }
  ],

  prescriptions: [
    { id: "rx1", name: "Metformin Prescription", patient: "Rheetam", prescriber: "Dr Sarah Lee", issueDate: "1 Jul 2026", expiryDate: "1 Jan 2027", medicines: ["Metformin 500 mg — 60 tablets — one tablet twice daily"], status: "active" },
    { id: "rx2", name: "Amlodipine & Atorvastatin Prescription", patient: "Father", prescriber: "Dr Sarah Lee", issueDate: "3 Jan 2026", expiryDate: "3 Jan 2027", medicines: ["Amlodipine 5 mg — 90 tablets — one tablet each morning", "Atorvastatin 10 mg — 90 tablets — one tablet at bedtime"], status: "expiring" },
    { id: "rx3", name: "Vitamin D Prescription", patient: "Mother", prescriber: "Dr Amelia Ross", issueDate: "12 May 2026", expiryDate: "12 Nov 2026", medicines: ["Vitamin D 1,000 IU — 90 capsules — one capsule daily"], status: "active" }
  ],

  missedHistory: [
    { date: "14 Jul", medicine: "Metformin", time: "8:00 PM", status: "Missed", notes: "No response" },
    { date: "13 Jul", medicine: "Vitamin D", time: "1:00 PM", status: "Missed", notes: "Caregiver notified" },
    { date: "12 Jul", medicine: "Vitamin D", time: "1:00 PM", status: "Taken late", notes: "Taken at 4:10 PM" },
    { date: "10 Jul", medicine: "Metformin", time: "8:00 AM", status: "Skipped", notes: "Feeling unwell" },
    { date: "8 Jul", medicine: "Amlodipine", time: "7:30 AM", status: "Missed", notes: "No response" }
  ],

  reminders: [
    { category: "Inventory", title: "Metformin is running low", detail: "18 tablets remaining · Estimated supply: 9 days", suggestion: "Suggested refill date: 20 Jul 2026", severity: "warning" },
    { category: "Inventory", title: "Atorvastatin is critically low", detail: "3 tablets remaining · Estimated supply: 3 days", suggestion: "Order today to avoid running out", severity: "critical" },
    { category: "Dose", title: "Vitamin D dose has not been recorded", detail: "Mother's 1:00 PM dose is now overdue", suggestion: "Caregiver notified at 2:00 PM", severity: "critical" },
    { category: "Expiry", title: "Paracetamol expires in 5 months", detail: "Expiry date: 15 Dec 2026", suggestion: "No action needed yet", severity: "info" },
    { category: "Prescription", title: "Amlodipine prescription renewal needed", detail: "Expires 3 Jan 2027", suggestion: "Contact Dr Sarah Lee to renew", severity: "warning" }
  ],

  recentActivity: [
    { text: "Metformin marked as taken for Rheetam", when: "Today, 8:12 AM" },
    { text: "Prescription uploaded for Father", when: "Yesterday, 5:40 PM" },
    { text: "30 tablets added to Metformin inventory", when: "Yesterday, 6:30 PM" },
    { text: "Mother's evening dose was missed", when: "2 days ago" },
    { text: "Caregiver Anika accepted invitation", when: "3 days ago" }
  ],

  caregivers: [
    { name: "Anika Chowdhury", relationship: "Sister", permission: "Dose Support", status: "Active" },
    { name: "Imran Hossain", relationship: "Neighbour", permission: "View Only", status: "Pending" }
  ],

  reportSummary: { adherence: 92, taken: 45, missed: 3, skipped: 1, late: 5 }
};
