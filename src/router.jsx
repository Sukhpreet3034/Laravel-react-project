import {createBrowserRouter, Navigate} from 'react-router-dom';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Signup from './views/Signup';
import Users from './views/Users';
import Dashboard from './views/Dashboard';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import UserForm from './views/userForm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users/new',
                element: <UserForm />
            },
            {
                path: '/users/:id',
                element: <UserForm />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },

]);

export default router;