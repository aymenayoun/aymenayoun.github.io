import React, { useRef } from 'react';

const CV = () => {
  const cvRef = useRef();

  const handleDownloadPDF = () => {
    const element = cvRef.current;
    const opt = {
      margin: [8, 8, 8, 8],
      filename: 'CV_Ayouni_Aymen.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all' }
    };

    if (typeof window.html2pdf === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => window.html2pdf().set(opt).from(element).save();
      document.head.appendChild(script);
    } else {
      window.html2pdf().set(opt).from(element).save();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const styles = {
    container: {
      textAlign: 'center',
      margin: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    buttonContainer: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      marginBottom: '25px'
    },
    button: {
      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
      color: 'white',
      padding: '12px 25px',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '600',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease'
    },
    buttonSecondary: {
      background: 'linear-gradient(135deg, #6b7280, #4b5563)',
      color: 'white',
      padding: '12px 25px',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '600',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease'
    },
    cvContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '25px 30px',
      background: 'white',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.4',
      color: '#333',
      textAlign: 'left',
      fontSize: '13px'
    },
    cvHeader: {
      textAlign: 'center',
      borderBottom: '2.5px solid #2563eb',
      paddingBottom: '12px',
      marginBottom: '18px'
    },
    cvTitle: {
      margin: '0',
      fontSize: '28px',
      color: '#1e40af',
      letterSpacing: '1.5px',
      fontWeight: 'bold'
    },
    cvSubtitle: {
      fontSize: '15px',
      color: '#4b5563',
      margin: '5px 0',
      fontWeight: '500'
    },
    cvContact: {
      fontSize: '11px',
      color: '#6b7280',
      marginTop: '8px',
      lineHeight: '1.3'
    },
    cvSection: {
      marginBottom: '16px'
    },
    cvSectionTitle: {
      fontSize: '15px',
      color: '#1e40af',
      borderBottom: '1.5px solid #3b82f6',
      paddingBottom: '4px',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.8px',
      fontWeight: 'bold'
    },
    cvItem: {
      marginBottom: '12px'
    },
    cvItemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '4px'
    },
    cvDate: {
      color: '#6b7280',
      fontSize: '11px',
      fontStyle: 'italic',
      whiteSpace: 'nowrap',
      marginLeft: '10px'
    },
    cvText: {
      fontSize: '12px',
      lineHeight: '1.5',
      textAlign: 'justify',
      color: '#374151'
    },
    cvTextSm: {
      fontSize: '11px',
      color: '#6b7280',
      fontStyle: 'italic'
    },
    cvList: {
      margin: '4px 0',
      paddingLeft: '20px'
    },
    cvListItem: {
      fontSize: '11.5px',
      marginBottom: '3px',
      color: '#374151',
      lineHeight: '1.4'
    },
    cvSkillsCompact: {
      fontSize: '11.5px',
      marginBottom: '5px',
      lineHeight: '1.5'
    },
    cvFooterNote: {
      textAlign: 'center',
      fontSize: '11px',
      color: '#6b7280',
      marginTop: '16px',
      paddingTop: '10px',
      borderTop: '1px solid #e5e7eb',
      fontStyle: 'italic'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button
          onClick={handleDownloadPDF}
          style={styles.button}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          📄 Télécharger PDF (Recommandé)
        </button>
        <button
          onClick={handlePrint}
          style={styles.buttonSecondary}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          🖨️ Imprimer
        </button>
      </div>

      <div style={styles.cvContainer} ref={cvRef}>
        {/* Header */}
        <div style={styles.cvHeader}>
          <h1 style={styles.cvTitle}>AYOUNI AYMEN</h1>
          <div style={styles.cvSubtitle}>Étudiant Ingénieur en Génie Logiciel</div>
          <div style={styles.cvContact}>
            ayouniaymen.inc@gmail.com • +216 26 708 932 • Sidi-Bouzid, Tunisie • linkedin.com/in/aymen-ayouni-85457a322
          </div>
        </div>

        {/* Profile */}
        <div style={styles.cvSection}>
          <h2 style={styles.cvSectionTitle}>PROFIL</h2>
          <p style={styles.cvText}>
            Étudiant ingénieur en Génie Logiciel spécialisé en IA/ML, développement full-stack et systèmes intelligents. 
            Expérience en vision par ordinateur, OCR, développement mobile (Flutter) et web (Spring Boot, Django, Angular). 
            Recherche un stage PFE pour mettre en pratique mes compétences en développement de solutions innovantes.
          </p>
        </div>

        {/* Education */}
        <div style={styles.cvSection}>
          <h2 style={styles.cvSectionTitle}>FORMATION</h2>
          <div style={styles.cvItem}>
            <div style={styles.cvItemHeader}>
              <div>
                <strong>Cycle d'Ingénieur - Génie Logiciel</strong> | École Supérieure Privée d'Ingénieurs de Gafsa (ESIP)
              </div>
              <div style={styles.cvDate}>2021 - 2026</div>
            </div>
            <div style={styles.cvTextSm}>Spécialisation : Systèmes intelligents, IA/ML, Big Data, développement logiciel</div>
          </div>
        </div>

        {/* Experience */}
        <div style={styles.cvSection}>
          <h2 style={styles.cvSectionTitle}>EXPÉRIENCE PROFESSIONNELLE</h2>

          <div style={styles.cvItem}>
            <div style={styles.cvItemHeader}>
              <div><strong>Stagiaire Développement Mobile</strong> | TECKSIGHT - Gafsa Sud</div>
              <div style={styles.cvDate}>Juil - Sept 2025</div>
            </div>
            <ul style={styles.cvList}>
              <li style={styles.cvListItem}>Développement d'une application Flutter de suivi de colis avec Firebase (authentification, géolocalisation, notifications push)</li>
              <li style={styles.cvListItem}>Optimisation de la réactivité et des performances pour un usage fluide en temps réel</li>
            </ul>
          </div>

          <div style={styles.cvItem}>
            <div style={styles.cvItemHeader}>
              <div><strong>Stagiaire Développement Web Full-Stack</strong> | TECKSIGHT - Gafsa Sud</div>
              <div style={styles.cvDate}>Juil - Août 2024</div>
            </div>
            <ul style={styles.cvList}>
              <li style={styles.cvListItem}>Conception et développement de "TripleAExpenses" (Django/MongoDB) avec système d'authentification sécurisé</li>
              <li style={styles.cvListItem}>Création de tableaux de bord interactifs avec visualisation des données financières</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div style={styles.cvSection}>
          <h2 style={styles.cvSectionTitle}>PROJETS CLÉS</h2>

          <div style={styles.cvItem}>
            <div style={styles.cvItemHeader}>
              <div><strong>Sino–North Africa Competition (Médaille de Bronze)</strong></div>
              <div style={styles.cvDate}>2025</div>
            </div>
            <ul style={styles.cvList}>
              <li style={styles.cvListItem}>Application IA d'OCR (PaddleOCR, YOLOv8s) pour reconnaissance de numéros de série sur jantes aluminium</li>
            </ul>
          </div>

          <div style={styles.cvItem}>
            <div style={styles.cvItemHeader}>
              <div><strong>Inventory Management System</strong> | Projet académique ESPIG</div>
              <div style={styles.cvDate}>2025</div>
            </div>
            <ul style={styles.cvList}>
              <li style={styles.cvListItem}>Gestion des stocks (Spring Boot/Angular/MySQL) avec module IA Python pour reconnaissance automatique des produits</li>
            </ul>
          </div>

          <div style={styles.cvItem}>
            <div style={styles.cvItemHeader}>
              <div><strong>Flutter Parcel Tracking App</strong></div>
              <div style={styles.cvDate}>2025</div>
            </div>
            <ul style={styles.cvList}>
              <li style={styles.cvListItem}>Application de gestion et suivi de livraison en temps réel avec backend Firebase</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div style={styles.cvSection}>
          <h2 style={styles.cvSectionTitle}>COMPÉTENCES TECHNIQUES</h2>
          <div>
            <div style={styles.cvSkillsCompact}><strong>Langages:</strong> Java, Python, JavaScript, Dart, SQL</div>
            <div style={styles.cvSkillsCompact}><strong>Frameworks:</strong> Spring Boot, Django, Angular, Flutter, React</div>
            <div style={styles.cvSkillsCompact}><strong>IA/ML:</strong> TensorFlow, Keras, OpenCV, Scikit-learn, PaddleOCR, YOLO</div>
            <div style={styles.cvSkillsCompact}><strong>Bases de données:</strong> MySQL, MongoDB, Firebase</div>
            <div style={styles.cvSkillsCompact}><strong>Outils:</strong> Git, VS Code, IntelliJ • <strong>Méthodologies:</strong> Agile, Scrum, DevOps</div>
          </div>
        </div>

        {/* Languages */}
        <div style={styles.cvSection}>
          <h2 style={styles.cvSectionTitle}>LANGUES & COMPÉTENCES TRANSVERSALES</h2>
          <div>
            <div style={styles.cvSkillsCompact}><strong>Langues:</strong> Arabe (Maternel), Français (Courant), Anglais (Courant)</div>
            <div style={styles.cvSkillsCompact}><strong>Soft Skills:</strong> Travail d'équipe, Communication, Résolution de problèmes, Gestion de projet, Adaptabilité</div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.cvFooterNote}>
          Disponible immédiatement pour un stage PFE • Mobilité géographique en Tunisie
        </div>
      </div>
    </div>
  );
};

export default CV;