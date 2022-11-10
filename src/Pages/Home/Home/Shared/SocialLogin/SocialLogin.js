import React, { useState } from 'react';
import { AuthContext } from '../../../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useState(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;