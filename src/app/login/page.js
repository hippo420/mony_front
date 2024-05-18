'use client';
import 'boxicons';
import { useState } from 'react';
import gfnTrx from '../utils/fetch';
import styles from './Login.module.css';

export default function Login()
{
    //const login = useAuth();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = '/login/prcLogin/';
        //const member = {userId,  password:encPW(password)};
        const member = {userId,  password};
        const [isSignIn, setIsSignIn] = useState(true);

        const toggleForm = () => {
            setIsSignIn(!isSignIn);
        };

        try {
            // fetchData 함수를 사용하여 데이터 가져오기
            const data = gfnTrx(apiUrl,'POST',member,true, (error, data) => {
                if (error) {
                    console.error('Error occurred:', error);
                } else {
                    
                    console.log('login: ', data);
                    return { props: { data } };
                }
            });
            //login(data);
            
            // 데이터를 페이지의 props로 전달
            
        } catch (error) {
            // 오류 발생 시 처리
            console.error('Error fetching data:', error);
            return { props: { data: null } };
        }
    };

    return (
        <div>
            <div className={styles.container}>
            <h1>SIGN IN</h1>

            <ul className={styles.links}>
            <li>
                <a href="#" id="signin" onClick={()=>{
                    document.getElementById('signBtn').textContent="Sign in";
                }}>SIGN IN</a>
            </li>
            <li>
                <a href="#" id="signup" onClick={()=>{
                    document.getElementById('signBtn').textContent="Sign up";
                }}>SIGN UP</a>
            </li>
            <li>
                <a href="#" id="reset" onClick={()=>{
                    document.getElementById('email').value="";
                    document.getElementById('password').value="";
                    document.getElementById('repeat__password').value="";
                }}>RESET</a>
            </li>
            </ul>


            <form  action="" method="post">
            
                <div className={[styles.first_input, styles.input__block, styles.first_input__block].join(" ")}>
                    <input type="email" placeholder="Email" className={styles.input} id="email"   />
                </div>
                
                <div className={styles.input__block}>
                    <input type="password" placeholder="Password" className={styles.input} id="password"    />
                </div>
                
                <div className={styles.input__block}>
                    <input type="password" placeholder="Repeat password" className={[styles.input, styles.repeat__password].join(" ")} id="repeat__password"    />
                </div>
                
                <button id ="signBtn" className={styles.signin__btn}>Sign in</button>
            </form>

            <div className={styles.separator}>
            <p>OR</p>
            </div>

            <button className={styles.google__btn}>
            <i className={[styles.fa, styles.fa_google].join(" ")}></i>
            Sign in with Google
            </button>

            <button className={styles.github__btn}>
            <i className={[styles.fa, styles.fa_github].join(" ")}></i>
            Sign in with GitHub
            </button>
            </div>

            <footer>
            <p>
            Thank you for watching
            <i className={[styles.fa, styles.fa_heart].join(" ")}></i>
            <i className={[styles.fa, styles.fa_heart].join(" ")}></i>
            <i className={[styles.fa, styles.fa_heart].join(" ")}></i>
            </p>
            <p>
            Chouaib Blgn :
            <a href="https://www.facebook.com/chouaib45" >
                <i className={[styles.fa, styles.fa_facebook].join(" ")}></i>
            </a>
            <a href="http://twitter.com/chouaibblgn45">
                <i className={[styles.fa, styles.fa_twitter].join(" ")}></i>
            </a>
            <a href="http://instagram.com/chouaib_blgn">
                <i className={[styles.fa, styles.fa_instagram].join(" ")}></i>
            </a>
            <a href="http://linkedin.com/in/chouaibblgn/">
                <i className={[styles.fa, styles.fa_linkedin].join(" ")}></i>
            </a>
            <a href="https://www.behance.net/geek30">
                <i className={[styles.fa, styles.fa_behance].join(" ")}></i>
            </a>
            </p>
            </footer>
            <style jsx>
                {`
                    h1 {
                        color: #1ee95b;
                        font-size: 48px;
                        letter-spacing: -3px;
                        text-align: center;
                        margin: 120px 0 80px 0;
                        transition: 0.2s linear;
                    }
                    
                    body {
                        font-family: "Montserrat", sans-serif;
                        background: white;
                    }
                    form {
                        width: 100%;
                        max-width: 680px;
                        margin: 40px auto 10px;
                    }
                        form .input__block {
                        margin: 20px auto;
                        display: block;
                        position: relative;
                    }
                    form .input__block.first_input__block::before {
                        content: "";
                        position: absolute;
                        top: -15px;
                        left: 50px;
                        display: block;
                        width: 0;
                        height: 0;
                        background: transparent;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        border-bottom: 15px solid rgba(15, 19, 42, 0.1);
                        transition: 0.2s linear;
                    }
                    form .input__block.signup-input__block::before {
                        content: "";
                        position: absolute;
                        top: -15px;
                        left: 150px;
                        display: block;
                        width: 0;
                        height: 0;
                        background: transparent;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        border-bottom: 15px solid rgba(15, 19, 42, 0.1);
                        transition: 0.2s linear;
                    }
                    form .input__block input {
                        display: block;
                        width: 90%;
                        max-width: 680px;
                        height: 50px;
                        margin: 0 auto;
                        border-radius: 8px;
                        border: none;
                        background: rgba(15, 19, 42, 0.1);
                        color: rgba(15, 19, 42, 0.3);
                        padding: 0 0 0 15px;
                        font-size: 14px;
                        font-family: "Montserrat", sans-serif;
                    }
                    form .input__block input:focus, form .input__block input:active {
                        outline: none;
                        border: none;
                        color: #0f132a;
                    }
                    form .input__block input.repeat__password {
                        opacity: 0;
                        display: none;
                        transition: 0.2s linear;
                    }
                    form .signin__btn {
                        background: #1ee95b;
                        color: white;
                        display: block;
                        width: 92.5%;
                        max-width: 680px;
                        height: 50px;
                        border-radius: 8px;
                        margin: 0 auto;
                        border: none;
                        cursor: pointer;
                        font-size: 14px;
                        font-family: "Montserrat", sans-serif;
                        box-shadow: 0 15px 30px rgba(233, 30, 99, 0.36);
                        transition: 0.2s linear;
                    }
                    form .signin__btn:hover {
                        box-shadow: 0 0 0 rgba(233, 30, 99, 0);
                    }
                    footer p {
                        text-align: center;
                    }
                    footer p .fa {
                        color: #1ee95b;
                    }
                    footer p a {
                        text-decoration: none;
                        font-size: 17px;
                        margin: 0 5px;
                    }
                    footer p a .fa-facebook {
                        color: #3b5998;
                    }
                    footer p a .fa-twitter {
                        color: #1da1f2;
                    }
                    footer p a .fa-instagram {
                        color: #f77737;
                    }
                    footer p a .fa-linkedin {
                        color: #0077b5;
                    }
                    footer p a .fa-behance {
                        color: #1769ff;
                    }
                `}</style>

        </div>


    );
}