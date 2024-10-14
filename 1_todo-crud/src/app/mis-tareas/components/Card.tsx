import { ReactElement } from "react";
import { ITask } from "../page";

export const Card = ({
    title,
    children,
    description
}: ITask & { children: ReactElement }) => {
    return (
        <div className="flex justify-between gap-2 bg-white border border-1 rounded shadow-sm px-4 py-5 my-4">
            <div className="flex flex-col max-w-80">
                <p className="text-base font-semibold text-neutral-80 leading-5">{title}</p>
                <span className="text-xs text-neutral-40 leading-4 text-ellipsis overflow-hidden max-w-80">{description}</span>
            </div>
            <div className="flex">
                {children}
            </div>
        </div>
    );
};