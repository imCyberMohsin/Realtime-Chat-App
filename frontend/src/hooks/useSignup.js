import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullname, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
            });

            const data = await res.json();
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }

            // Local Storage
            localStorage.setItem("chat-app", JSON.stringify(data))

            // Context
            setAuthUser(data);

            if (!res.ok) {
                toast.error(data.message || 'Signup failed');
                return;
            }

            toast.success('Signup successful!');
            // return data;

        } catch (error) {
            toast.error(error.message || 'An error occurred during signup');
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignup;

function handleInputErrors({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("Fields cannot be empty!");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not Match!");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be greater than length 6");
        return false;
    }

    return true;
}
