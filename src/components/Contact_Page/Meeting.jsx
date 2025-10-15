import React, { useEffect } from 'react';

const Meeting = () => {
  const styles = {
    contactContainer: {
      width: '95%',
      minHeight: '100vh',
      background: '#ffffff',
      padding: '50px 20px',
    },
    contactContent: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    contactTitle: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#000000',
      lineHeight: '1.3',
      marginBottom: '80px',
      maxWidth: '650px',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '50px 40px',
    },
    teamCardWrapper: {
      position: 'relative',
    },
    teamCardBorder: {
      background: 'white',
      position: 'relative',
      transition: 'transform 0.3s ease',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    },
    borderTealBefore: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '8px',
      height: '100%',
      background: '#14b8a6',
      zIndex: 1,
    },
    borderTealAfter: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '8px',
      background: '#14b8a6',
      zIndex: 1,
    },
    cardImageWrapper: {
      position: 'relative',
      width: '100%',
      height: '320px',
      overflow: 'hidden',
    },
    teamImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    accentBar: {
      position: 'absolute',
      bottom: '30px',
      right: 0,
      width: '10px',
      height: '120px',
      zIndex: 2,
    },
    cardContent: {
      padding: '30px 28px',
      position: 'relative',
      background: 'white',
    },
    quoteBox: {
      background: '#f8f9fa',
      padding: '22px 20px',
      borderRadius: '6px',
      marginBottom: '25px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    teamQuote: {
      fontSize: '13.5px',
      lineHeight: '1.75',
      color: '#4b5563',
      fontStyle: 'italic',
      fontWeight: '400',
      margin: 0,
    },
    teamInfo: {
      marginBottom: '18px',
    },
    teamName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '6px',
      margin: '0 0 6px 0',
    },
    teamRole: {
      fontSize: '13px',
      color: '#9ca3af',
      fontWeight: '400',
      margin: 0,
    },
    dotsPattern: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginTop: '15px',
    },
    dot: {
      width: '6px',
      height: '6px',
      background: '#d1d5db',
      borderRadius: '50%',
      display: 'inline-block',
    },
  };

  const getAccentColor = (color) => {
    const colors = {
      yellow: '#fbbf24',
      orange: '#fb923c',
      gray: '#9ca3af',
      cyan: '#22d3ee',
    };
    return colors[color];
  };

  const teamMembers = [
    {
      id: 1,
      image: '/src/assets/Expert4.png',
      quote: '"We ensure that any information you give is stored immediately by simply contacting our team"',
      name: 'Web Developer',
      role: 'Full Stack',
      borderColor: 'teal',
      accentColor: 'yellow',
    },
    {
      id: 2,
      image: '/src/assets/Exp1.jpg',
      quote: '"We ensure that any information you give is stored immediately by simply contacting our team"',
      name: 'Content Writer',
      role: 'Head of CS',
      borderColor: 'teal',
      accentColor: 'gray',
    },
    {
      id: 3,
      image: '/src/assets/Exp2.jpg',
      quote: '"We ensure that any information you give is stored immediately by simply contacting our team"',
      name: 'UI/UX Designer',
      role: 'Head of CS',
      borderColor: 'teal',
      accentColor: 'orange',
    },
    {
      id: 4,
      image: '/src/assets/Exp3.jpg',
      quote: '"We ensure that any information you give is stored immediately by simply contacting our team"',
      name: 'UI/UX Designer',
      role: 'Head of CS',
      borderColor: 'teal',
      accentColor: 'yellow',
    },
    {
      id: 5,
      image: '/src/assets/Exp5.png',
      quote: '"We ensure that any information you give is stored immediately by simply contacting our team"',
      name: 'UI/UX Designer',
      role: 'Head of CS',
      borderColor: 'teal',
      accentColor: 'gray',
    },
    {
      id: 6,
      image: '/src/assets/Exp6.png',
      quote: '"We ensure that any information you give is stored immediately by simply contacting our team"',
      name: 'UI/UX Designer',
      role: 'Head of CS',
      borderColor: 'teal',
      accentColor: 'cyan',
    },
  ];

  // ✅ Inject responsive styles dynamically
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      /* Tablet */
      @media (max-width: 1024px) {
        .meeting-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 40px 30px !important;
        }
        .meeting-title {
          font-size: 36px !important;
          max-width: 100% !important;
          text-align: center !important;
          margin: 0 auto 50px !important;
        }
      }

      /* Mobile */
      @media (max-width: 768px) {
        .meeting-grid {
          grid-template-columns: 1fr !important;
          gap: 30px !important;
        }
        .meeting-container {
          padding: 40px 15px !important;
        }
        .meeting-title {
          font-size: 28px !important;
          line-height: 1.4 !important;
          margin-bottom: 40px !important;
          text-align: center !important;
        }
      }

      /* Small Mobile */
      @media (max-width: 480px) {
        .meeting-title {
          font-size: 24px !important;
        }
        .meeting-card img {
          height: 240px !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div style={styles.contactContainer} className="meeting-container">
      <div style={styles.contactContent}>
        <h1 style={styles.contactTitle} className="meeting-title">
          Meet the talented team who make all this happen
        </h1>

        <div style={styles.teamGrid} className="meeting-grid">
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.teamCardWrapper} className="meeting-card">
              <div
                style={styles.teamCardBorder}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.borderTealBefore}></div>
                <div style={styles.borderTealAfter}></div>

                <div style={styles.cardImageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={styles.teamImage}
                  />
                  <div
                    style={{
                      ...styles.accentBar,
                      background: getAccentColor(member.accentColor),
                    }}
                  ></div>
                </div>

                <div style={styles.cardContent}>
                  <div style={styles.quoteBox}>
                    <p style={styles.teamQuote}>{member.quote}</p>
                  </div>

                  <div style={styles.teamInfo}>
                    <h3 style={styles.teamName}>{member.name}</h3>
                    <p style={styles.teamRole}>{member.role}</p>
                  </div>

                  <div style={styles.dotsPattern}>
                    {[...Array(8)].map((_, i) => (
                      <span key={i} style={styles.dot}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meeting;
