import clock from './components/clock'
import forgotpassword from './components/forgot-password'
export const routes = [
    {
        path: '/', name: 'clock', component: clock
    },
    {
        path: '/forgot-password', name: 'forgot-password', component: forgotpassword
        
    }
]