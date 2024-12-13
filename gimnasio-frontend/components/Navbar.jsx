import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/Navbar.css';
import { 
  HomeIcon, 
  CreditCardIcon, 
  CalendarIcon, 
  UsersIcon,
  CheckCircleIcon // Importa el ícono de asistencia
} from 'lucide-react';

const Navbar = () => {
    const menuItems = [
        { href: '/', label: 'Inicio', icon: HomeIcon },
        { href: '/membresias', label: 'Alquiler', icon: CreditCardIcon },
        { href: '/clases', label: 'Agregar Libros', icon: CalendarIcon },
        { href: '/entrenadores', label: 'Autores', icon: UsersIcon },
        { href: '/asistencia', label: 'Devolución', icon: CheckCircleIcon }, // Nuevo apartado
        { href: '/Chatbot', label: 'Chatbot', icon: UsersIcon }
    ];

    return (
        <nav className="side-navbar">
            <ul className="menu">
                {menuItems.map((item) => (
                    <li key={item.href} className="menu-item">
                        <Link href={item.href} className="menu-link">
                            <item.icon size={24} className="menu-icon" />
                            <span className="menu-label">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
