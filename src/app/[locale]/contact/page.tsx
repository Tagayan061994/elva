'use client';

import { useState } from 'react';
import { getContent, type Locale } from '@/lib/content';
import styles from './page.module.scss';

export default function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const content = getContent(locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>{content.contact.title}</h1>
          <h2 className={styles.subtitle}>{content.contact.subtitle}</h2>
          <p className={styles.description}>{content.contact.description}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <div className={styles.infoItem}>
                <strong>Phone:</strong>
                <a href={`tel:${content.contact.info.phone}`}>
                  {content.contact.info.phone}
                </a>
              </div>
              <div className={styles.infoItem}>
                <strong>Email:</strong>
                <a href={`mailto:${content.contact.info.email}`}>
                  {content.contact.info.email}
                </a>
              </div>
              <div className={styles.infoItem}>
                <strong>Address:</strong>
                <p>{content.contact.info.address}</p>
              </div>
              <div className={styles.infoItem}>
                <strong>Hours:</strong>
                <p>{content.contact.info.hours}</p>
              </div>
            </div>

            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{content.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">{content.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">{content.contact.form.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">{content.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  {content.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

