"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Trash from '@/app/public/assets/icons/Trash.svg';

import { Button } from '@mui/base';
import { NewCard } from './components/NewCard';
import { Card } from './components/Card';
import axios from 'axios';

export interface ITask {
    userId?: number,
    id: number | string,
    title: string,
    completed?: boolean
    description?: string
}

const TasksList: React.FC = () => {
    const pathname = usePathname();
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const items = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTasks(items.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();

    }, []);

    const handleAddTask = (newTask: ITask) => {
        const existingIds = tasks.map(task => typeof task.id === 'number' ? task.id : 0);
        const newId = Math.max(...existingIds) + 1;

        const newTasks = {
            id: newId,
            title: newTask.title,
            description: newTask.description
        };
        setTasks(prevTasks => [newTasks, ...prevTasks]);
    };

    const handleDelete = async (id: number | null) => {
        setTasks(tasks.filter(item => item.id !== id));
    };

    return (
        <div className={`${pathname === '/mis-tareas' ? ' m-auto  py-8 px-4 max-w-lg ' : ''}`}>
            {pathname === '/mis-tareas' && <h2 className="text-neutral-60 text-xl font-bold ">Mis tareas</h2>}
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <>
                    {tasks.map((item: ITask) => (
                        <Card key={item.id} {...item}>
                            <Button onClick={() => handleDelete(Number(item.id))} className='w-[18px]'>
                                <Image src={Trash} alt={'Eliminar todo'} width={18} height={18} />
                            </Button>
                        </Card>
                    ))}
                </>
            )}
            <NewCard onAddTask={handleAddTask} />
        </div>
    );
};

export default TasksList;