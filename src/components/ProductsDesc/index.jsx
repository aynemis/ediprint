'use client';
import Link from 'next/link';

export default function Index() {
    return (
    <div  className="bg-gray-800 text-gray-50">
        <div id="first-section">
            <h1>Papeterie</h1>
            <li>Agenda</li>
            <li>Carnets</li>
            <li>Bloc notes</li>
        </div>
        <div id="second-section">
            <h1>Packaging</h1>
            <li>Sacs</li>
            <li>Boites</li>
        </div>
    </div>
    )
}