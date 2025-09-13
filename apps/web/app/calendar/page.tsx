'use client';

import { useState } from "react";
import Header from "@/_components/header";
import Calendar from "./calendar";
import { Checkbox } from "@/_components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/_components/ui/card";

// Mock class data - in a real app this would come from your database
const mockClasses = [
    { id: '1', name: 'CISC 474 - Web Development', color: '#3B82F6', visible: true },
    { id: '2', name: 'CISC 320 - Algorithms', color: '#10B981', visible: true },
    { id: '3', name: 'MATH 242 - Calculus II', color: '#F59E0B', visible: true },
    { id: '4', name: 'ENGL 110 - Academic Writing', color: '#EF4444', visible: true },
    { id: '5', name: 'PHYS 207 - Physics I', color: '#8B5CF6', visible: true },
];

export default function CalendarPage() {
    const [visibleClasses, setVisibleClasses] = useState<Record<string, boolean>>(
        mockClasses.reduce((acc, cls) => ({ ...acc, [cls.id]: cls.visible }), {})
    );

    const handleClassToggle = (classId: string) => {
        setVisibleClasses(prev => ({
            ...prev,
            [classId]: !prev[classId]
        }));
    };

    return (
        <div>
            <Header />
            <div className="mx-auto px-4 py-8 max-w-screen-2xl">
                <div className="flex gap-6">
                    {/* Calendar - 75% width */}
                    <div className="flex-1" style={{ width: '75%' }}>
                        <Calendar visibleClasses={visibleClasses} classes={mockClasses} />
                    </div>
                    
                    {/* Class Visibility Panel - 25% width */}
                    <div className="w-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Class Visibility</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {mockClasses.map((cls) => (
                                    <div key={cls.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={cls.id}
                                            checked={visibleClasses[cls.id]}
                                            onCheckedChange={() => handleClassToggle(cls.id)}
                                        />
                                        <label
                                            htmlFor={cls.id}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center space-x-2 cursor-pointer"
                                        >
                                            <div 
                                                className="w-3 h-3 rounded-full" 
                                                style={{ backgroundColor: cls.color }}
                                            />
                                            <span>{cls.name}</span>
                                        </label>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}