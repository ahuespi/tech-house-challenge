"use client";
import { Button } from "@mui/base";
import { FormField } from "./FormField";

export const DataFormComponent = () => {

    const dataForm = [
        {
            label: {
                text: 'Nombre',
                for: 'name',
            },
            input: {
                placeholder: 'Nombre',
                name: 'name',
                id: 'name',
                autocomplete: 'name'
            }
        },
        {
            label: {
                text: 'Email',
                for: 'email',
            },
            input: {
                placeholder: 'Email',
                name: 'email',
                id: 'email',
                autocomplete: 'email'
            }
        },
        {
            label: {
                text: 'Teléfono',
                for: 'phone',
            },
            input: {
                placeholder: 'Teléfono',
                name: 'phone',
                id: 'phone',
                autocomplete: 'phone'
            }
        }
    ]

    return (
        <div className=" shadow-sm px-4 py-5 border border-1 rounded  bg-white">
            <form className="flex  w-full gap-10 flex-col">
                <div className="flex gap-4 w-full flex-col">
                    {dataForm.map((item, i) => (
                        <FormField key={i} label={item.label} input={item.input} />
                    ))}
                </div>

                <Button className="w-full text-center font-semibold text-white bg-primary-main py-3 rounded">
                    Guardar
                </Button>
            </form>
        </div>
    );
};