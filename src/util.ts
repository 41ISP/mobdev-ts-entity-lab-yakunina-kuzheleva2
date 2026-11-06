

export const SPECIALIZATION = ["ShowJumping", "Dressage", "Triathlon"] as const
export type Specialization = (typeof SPECIALIZATION)[number]
export const specialization_labels: Record<Specialization, string> = {
   ShowJumping: "Конкур",
    Dressage: "Выездка",
    Triathlon: "Троеборье"
}

export const BREED = ["RWP", "OrlovTrotter", "Trakehner", "KWPN", "Budyonovskaya",
"Sangerschneider", "TrojanPony", "Crossbreed"] as const
export type Breed = (typeof BREED)[number]
export const breed_labels: Record<Breed, string> = {
  RWP:"РВП", 
OrlovTrotter: "Орловский рысак", 
Trakehner: "Тракененская", 
KWPN: "КВПН", 
Budyonovskaya:"Буденовская",
Sangerschneider: "Зангершнайде", 
TrojanPony: "Троянский пони", 
Crossbreed: "Помесь"
}


export const GENDER = ["Mare", "Stallion",  "Gelding"] as const
export type Gender = (typeof GENDER)[number]
export const gender_labels: Record<Gender, string> = {
  Mare: "Кобыла", 
  Stallion: "Жеребец",  
  Gelding: "Мерен"
}