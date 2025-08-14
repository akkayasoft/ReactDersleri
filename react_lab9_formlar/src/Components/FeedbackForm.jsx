import React, { useState } from 'react';
import './FeedbackForm.css'; // Stil için CSS'i içe aktar

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: '' // Derecelendirme için yeni durum
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          İsim: ${formData.name}
          E-posta: ${formData.email}
          Geri Bildirim: ${formData.feedback}
          Derecelendirme: ${formData.rating}
        `;
        const isConfirmed = window.confirm(`Lütfen bilgilerinizi onaylayın:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Geri bildirim gönderiliyor:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: '' // Gönderimden sonra derecelendirmeyi sıfırla
            });
            alert('Değerli geri bildiriminiz için teşekkür ederiz!');
        }
    };
  return (
    <>
    <nav>
    Ne Düşündüğünüzü Bize Söyleyin
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Sizden Geri Dönüş Almayı Çok İsteriz!</h2>
        <p>Lütfen geri bildiriminizi bizimle paylaşın.</p>
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta Adresiniz"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Geri Bildiriminiz"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
         <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Bizimle Değerlendirin:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                       
                        onChange={handleChange}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        
                        onChange={handleChange}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</p>
                </div>
        <button type="submit">Geri Bildirim Gönder</button>
      </form>
    </>
  );
};

export default FeedbackForm;