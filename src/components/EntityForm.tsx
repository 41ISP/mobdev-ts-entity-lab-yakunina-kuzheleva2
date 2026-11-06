import { useState } from "react"
import {  GENDER,  gender_labels, type Breed, type Gender, type Specialization } from "../util"
import { useHorsesStore } from "../store/useHorseStore"
import { api } from "../api"
import type { IHorseInput } from "../types"

const initialForm: IHorseInput = {
    name: "",
    DOB: "",
    owner: "",
    suit: "",
    height: 0,
    training: false,
    specialization: "ShowJumping" as Specialization,
    breed: "Crossbreed" as Breed,
    gender: "Mare" as Gender,
    fotochka: []

}

export function EntityForm() {
    const [form, setForm] = useState<IHorseInput>(initialForm)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { getHorses } = useHorsesStore()
    const addHorse = useHorsesStore((state) => state.addHorse)

    const onChange = <K extends keyof typeof form>(key: K, value: typeof form[K]) => {
        setForm((j) => ({ ...j, [key]: value }))
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            await api.createHorse(form)
            getHorses()
            setForm(initialForm)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Добавить лошадь</h2>

            <label className="field">
                {/* Порода
                <input
                    type="text"
                    required
                    value={form.breed}
                    onChange={(e) => onChange("breed", e.target.value)} 
                />*/}
            </label>

            <label className="field">
                Имя Владелеца
                <input
                    type="text"
                    required
                    value={form.owner
                    }
                    onChange={(e) => onChange("owner", e.target.value)}
                />
            </label>

            <label className="field">
                Дата рождения
                <input
                    type="date"
                    required
                    value={form.DOB}
                    onChange={(e) => onChange("DOB", e.target.value)}
                />
            </label>

            <label className="field">
                Масть
                <input
                    type="text"
                    value={form.suit}
                    onChange={(e) =>
                        onChange("suit", e.target.value)
                    }
                />
            </label>

            <label className="field">
                Рост
                <input
                    type="number"
                    min={0}
                    step={0.01}
                    value={form.height ?? 0}
                    onChange={(e) => onChange("height", Number(e.target.value))}
                />
            </label>

            <label className="field">
                Фото
                <input type="file" />
            </label>

            <label className="field">
                Порода
                <select>
                    value={form.gender}
                    onChange={(e) => onChange("gender", e.target.value as Gender)}
                    {GENDER.map((d) => (
                        <option key={d} value={d}>
                            {gender_labels[d]}
                        </option>
                    ))}                </select>
            </label>

            <fieldset>
                <legend>Группа чекбоксов</legend>
                <label className="check">
                    <input type="checkbox" />
                    Чекбокс 1
                </label>
                <label className="check">
                    <input type="checkbox" />
                    Чекбокс 2
                </label>
            </fieldset>

            <label className="check">
                <input
                    type="checkbox"
                    checked={form.training}
                    onChange={(e) => onChange("training", e.target.checked)}
                />
                тренинг
            </label>

            <button className="btn">Добавить</button>
        </form>
    )
}

