"use client";
import React, { useRef } from "react";
import StudentsList from "./StudentList";
import StudentForm from "./StudentForm";

export default function StudentsInfo() {
    const listRef = useRef();

    const refreshList = () => {
        if (listRef.current) listRef.current.fetchStudents?.();
    };

    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-green-600 mb-6">🧑‍🎓 শিক্ষার্থীর তথ্য পরিচালনা</h1>
            <StudentForm onAdd={refreshList} />
            <StudentsList ref={listRef} />
        </div>
    );
}
