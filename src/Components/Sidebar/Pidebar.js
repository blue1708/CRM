import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import 'primeicons/primeicons.css';
import './Pidebar.css';

export default function Pidebar() {
    const [visible, setVisible] = useState(false);
    const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
    const [isReportsVisible, setIsReportsVisible] = useState(false);
    const [isRevenueVisible, setIsRevenueVisible] = useState(false);
    const [isApplicationVisible, setIsApplicationVisible] = useState(false);

    const toggleFavorites = () => setIsFavoritesVisible(!isFavoritesVisible);
    const toggleReports = () => setIsReportsVisible(!isReportsVisible);
    const toggleRevenue = () => setIsRevenueVisible(!isRevenueVisible);
    const toggleApplication = () => setIsApplicationVisible(!isApplicationVisible);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="sidebar-lat">
                <div className='flex flex-wrap align-items-center justify-content-between flex-shrink-0'>
                    <img src="/Img/LogoEmpresa.webp" alt="Logo de BDS" className="logo" />
                    <h2 className='nombre'>Wapayasos</h2>
                </div>
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <li>
                            <div onClick={toggleFavorites} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                <span className="font-medium">FAVORITES</span>
                                <i className={`pi ${isFavoritesVisible ? 'pi-chevron-up' : 'pi-chevron-down'}`}></i>
                                <Ripple />
                            </div>
                            <ul className={`list-none p-0 m-0 overflow-hidden ${isFavoritesVisible ? '' : 'hidden'}`}>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-home mr-2"></i>
                                        <span className="font-medium">Dashboard</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-bookmark mr-2"></i>
                                        <span className="font-medium">Bookmarks</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <div onClick={toggleReports} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-line mr-2"></i>
                                        <span className="font-medium">Reports</span>
                                        <i className={`pi ${isReportsVisible ? 'pi-chevron-up' : 'pi-chevron-down'} ml-auto mr-1`}></i>
                                        <Ripple />
                                    </div>
                                    <ul className={`list-none py-0 pl-3 pr-0 m-0 overflow-hidden ${isReportsVisible ? '' : 'hidden'}`}>
                                        <li>
                                            <div onClick={toggleRevenue} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Revenue</span>
                                                <i className={`pi ${isRevenueVisible ? 'pi-chevron-up' : 'pi-chevron-down'} ml-auto mr-1`}></i>
                                                <Ripple />
                                            </div>
                                            <ul className={`list-none py-0 pl-3 pr-0 m-0 overflow-hidden ${isRevenueVisible ? '' : 'hidden'}`}>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-table mr-2"></i>
                                                        <span className="font-medium">View</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-search mr-2"></i>
                                                        <span className="font-medium">Search</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Expenses</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">Team</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-comments mr-2"></i>
                                        <span className="font-medium">Messages</span>
                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                            3
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">Calendar</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <li>
                            <div onClick={toggleApplication} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                <span className="font-medium">APPLICATION</span>
                                <i className={`pi ${isApplicationVisible ? 'pi-chevron-up' : 'pi-chevron-down'}`}></i>
                                <Ripple />
                            </div>
                            <ul className={`list-none p-0 m-0 overflow-hidden ${isApplicationVisible ? '' : 'hidden'}`}>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-folder mr-2"></i>
                                        <span className="font-medium">Projects</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-bar mr-2"></i>
                                        <span className="font-medium">Performance</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog mr-2"></i>
                                        <span className="font-medium">Settings</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} className="sidebar-lat-button"></Button>
        </div>
    );
}
