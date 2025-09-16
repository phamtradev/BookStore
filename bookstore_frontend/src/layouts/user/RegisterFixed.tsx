import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

export const Register = () => {

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [hoDem, setHoDem] = React.useState('');
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [gender, setGender] = React.useState(1);

  //error
  const [userNameError, setUserNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [generalError, setGeneralError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  //event
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setUserNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setPhoneError('');
    setGeneralError('');

    // Validate form
    let isValid = true;

    if (!userName.trim()) {
      setUserNameError('Tên đăng nhập không được để trống');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email không được để trống');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email không hợp lệ');
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError('Mật khẩu không được để trống');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Mật khẩu phải có ít nhất 6 ký tự');
      isValid = false;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Mật khẩu xác nhận không khớp');
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      setPhoneError('Số điện thoại không được để trống');
      isValid = false;
    } else if (!/^\d{10,11}$/.test(phoneNumber)) {
      setPhoneError('Số điện thoại không hợp lệ');
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tenDangNhap: userName,
            email: email,
            matKhau: password,
            hoDem: hoDem,
            ten: name,
            soDienThoai: phoneNumber,
            gioiTinh: gender
          })
        });

        const data = await response.json();
        console.log('API response:', data);

        if (response.ok) {
          setSuccess(true);
          // Reset form
          setUserName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setHoDem('');
          setName('');
          setPhoneNumber('');
          setGender(1);
        } else {
          // Phân tích phản hồi từ API
          if (data && data.error) {
            // Xử lý lỗi dựa vào thông báo từ API
            if (data.error.includes('Tài khoản') || data.error.includes('tài khoản') || data.error.toLowerCase().includes('username')) {
              // Tất cả lỗi liên quan đến tài khoản/username hiển thị dưới ô nhập
              setUserNameError(data.error);
              // Không hiển thị lỗi chung
            }
            else if (data.error.includes('email') || data.error.includes('Email')) {
              // Tất cả lỗi liên quan đến email hiển thị dưới ô nhập
              setEmailError(data.error);
              // Không hiển thị lỗi chung
            }
            else {
              // Các lỗi khác hiển thị ở thông báo chung
              setGeneralError(data.error);
            }
          } else if (data && data.message) {
            // Xử lý một số lỗi đặc biệt
            if (data.message.includes('username') || data.message.includes('tên đăng nhập') || 
                data.message.includes('tenDangNhap') || data.message.includes('tài khoản') ||
                data.message.includes('Tài khoản')) {
              // Tất cả lỗi liên quan đến tài khoản/username hiển thị dưới ô nhập
              setUserNameError(data.message);
            }
            else if (data.message.includes('email') || data.message.includes('Email')) {
              // Tất cả lỗi liên quan đến email hiển thị dưới ô nhập
              setEmailError(data.message);
            }
            else if (data.message === 'IdInvalidException') {
              setGeneralError('Không thể đăng ký. Vui lòng kiểm tra lại thông tin.');
            }
            else if (data.message.includes('IdInvalid') || data.message.includes('Invalid')) {
              // Xử lý các lỗi liên quan đến định danh không hợp lệ
              setGeneralError('Thông tin đăng ký không hợp lệ. Vui lòng kiểm tra lại.');
            }
            else {
              let userFriendlyMessage = data.message;
              if (data.message.includes('Exception')) {
                userFriendlyMessage = 'Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.';
              }
              setGeneralError(userFriendlyMessage);
            }
          } else if (data && data.errors && Array.isArray(data.errors)) {
            // Nếu API trả về mảng errors
            let hasFieldError = false;

            data.errors.forEach((error: any) => {
              if (error.field === 'tenDangNhap' || error.field === 'userName') {
                setUserNameError(error.message || 'Tên đăng nhập đã tồn tại');
                hasFieldError = true;
              } else if (error.field === 'email') {
                setEmailError(error.message || 'Email đã được đăng ký');
                hasFieldError = true;
              }
            });

            if (!hasFieldError) {
              setGeneralError('Đã xảy ra lỗi khi đăng ký. Vui lòng kiểm tra lại thông tin.');
            }
          } else {
            setGeneralError('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
          }
        }
      } catch (error) {
        console.error('Registration error:', error);
        setGeneralError('Không thể kết nối đến máy chủ');
      } finally {
        setLoading(false);
      }
    }
  }

  // Hàm này đã không còn được sử dụng vì chúng ta xử lý trực tiếp từ API đăng ký

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //thay doi gia tri
    const value = e.target.value;
    setUserName(value);

    //kiem tra loi co ban
    setUserNameError('');

    // Kiểm tra tên đăng nhập rỗng
    if (!value.trim()) {
      return;
    }

    // Không cần kiểm tra tên đăng nhập qua API riêng
    // API đăng ký sẽ kiểm tra và trả về lỗi nếu trùng
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //thay doi gia tri
    const value = e.target.value;
    setEmail(value);

    //kiem tra loi co ban
    setEmailError('');

    // Kiểm tra email rỗng hoặc không hợp lệ
    if (!value.trim()) {
      return;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Email không hợp lệ');
      return;
    }

    // Không cần kiểm tra email qua API riêng
    // API đăng ký sẽ kiểm tra và trả về lỗi nếu trùng
  }

  return (
    <div className='container'>
      <h1 className='mt-5 text-center'>Đăng ký</h1>
      {success ? (
        <div className="alert alert-success col-md-6 mx-auto" role="alert">
          Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.
        </div>
      ) : (
        <div className='mb-5 col-md-6 col-12 mx-auto'>
          {/* Chỉ hiển thị lỗi chung không liên quan đến tên tài khoản hoặc email */}
          {generalError && !userNameError && !emailError && (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <i className="fas fa-exclamation-circle me-2"></i>
              <div>{generalError}</div>
            </div>
          )}
          <form onSubmit={handleSubmit} className='form shadow p-4 bg-white rounded'>
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>Tên đăng nhập<span className="text-danger">*</span></label>
              <input
                type="text"
                className={`form-control ${userNameError ? 'is-invalid' : ''}`}
                id='userName'
                value={userName}
                onChange={handleUserNameChange}
                placeholder="Nhập tên đăng nhập"
              />
              {userNameError && (
                <div className="invalid-feedback">
                  {userNameError === 'Đang kiểm tra...' ? (
                    <><span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span> {userNameError}</>
                  ) : (
                    <><i className="fas fa-exclamation-circle me-1"></i> {userNameError}</>
                  )}
                </div>
              )}
            </div>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email<span className="text-danger">*</span></label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                id='email'
                value={email}
                onChange={handleEmailChange}
                placeholder="Nhập email"
              />
              {emailError && (
                <div className="invalid-feedback">
                  {emailError === 'Đang kiểm tra...' ? (
                    <><span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span> {emailError}</>
                  ) : (
                    <><i className="fas fa-exclamation-circle me-1"></i> {emailError}</>
                  )}
                </div>
              )}
            </div>

            <div className="row">
              <div className='mb-3 col-md-6'>
                <label htmlFor='hoDem' className='form-label'>Họ đệm</label>
                <input
                  type="text"
                  className='form-control'
                  id='hoDem'
                  value={hoDem}
                  onChange={(e) => setHoDem(e.target.value)}
                  placeholder="Nhập họ đệm"
                />
              </div>

              <div className='mb-3 col-md-6'>
                <label htmlFor='name' className='form-label'>Tên</label>
                <input
                  type="text"
                  className='form-control'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên"
                />
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor='phoneNumber' className='form-label'>Số điện thoại<span className="text-danger">*</span></label>
              <input
                type="tel"
                className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                id='phoneNumber'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Nhập số điện thoại"
              />
              {phoneError && <div className="invalid-feedback">{phoneError}</div>}
            </div>

            <div className='mb-3'>
              <label className='form-label'>Giới tính</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value="1"
                    checked={gender === 1}
                    onChange={() => setGender(1)}
                  />
                  <label className="form-check-label" htmlFor="male">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value="0"
                    checked={gender === 0}
                    onChange={() => setGender(0)}
                  />
                  <label className="form-check-label" htmlFor="female">Nữ</label>
                </div>
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Mật khẩu<span className="text-danger">*</span></label>
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
              />
              {passwordError && <div className="invalid-feedback">{passwordError}</div>}
            </div>

            <div className='mb-4'>
              <label htmlFor='confirmPassword' className='form-label'>Xác nhận mật khẩu<span className="text-danger">*</span></label>
              <input
                type="password"
                className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu"
              />
              {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Đang xử lý...
                </>
              ) : 'Đăng ký'}
            </button>

            <div className="mt-3 text-center">
              <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
