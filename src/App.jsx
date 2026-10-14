import {useState} from 'react'
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AppLayout
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                >
                    <Route index element={<DashboardPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
