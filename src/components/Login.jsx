import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Geçerli bir email adresi girin';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Şifreniz en az 8 karakter olmalıdır';
    }

    if (!acceptedTerms) {
      newErrors.terms = 'Kullanım şartlarını kabul etmelisiniz';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsFormValid(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            Kullanım Şartlarını Kabul Ediyorum
          </label>
          {errors.terms && <p style={{ color: 'red' }}>{errors.terms}</p>}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;