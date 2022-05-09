import themes from '../../scss/themes/_theme.scss'

export const styles = {
  chatWithMeButton: {
      cursor: 'pointer',
      //boxShadow: '0px 0px 16px 3px rgba(0, 0, 0, 0.33)',
      // Border
      borderRadius: '50%',
      // Background 
      backgroundImage: `url(chat-right-text.svg)`, 
      backgroundColor: `${themes.primary}`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '50px',
      // Size
      width: '84px',
      height: '84px',
  },
  avatarHello: { 
      // Position
      position: 'absolute', 
      left: 'calc(-100% - 44px - 28px)', 
      top: 'calc(50% - 24px)', 
      // Layering
      zIndex: '10000',
      boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
      // Border
      padding: '12px 12px 12px 16px',
      borderRadius: '24px', 
      // Color
      backgroundColor: `${themes.primary}`,
      color: 'white',
  },
  supportWindow: {
      // Position
      position: 'fixed',
      bottom: '116px',
      right: '24px',
      // Size
      width: '420px',
      height: '530px',
      maxWidth: 'calc(100% - 48px)',
      maxHeight: 'calc(100% - 48px)',
      backgroundColor: 'white',
      // Border
      borderRadius: '12px',
      border: `4px solid ${themes.secondary}`,
      //overflow: 'hidden',
      // Shadow
      boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
  },
  emailFormWindow: { 
      width: '100%',  
      overflow: 'hidden',
      transition: "all 0.5s ease",
      WebkitTransition: "all 0.5s ease",
      MozTransition: "all 0.5s ease",
  },
  stripe: {
      position: 'relative',
      top: '-200px',
      left: '200px',
      width: '100%',
      height: '400px',
      backgroundColor: `${themes.secondary}`,
      transform: 'skewY(0deg)',
      borderRadius: '50%',
  },
  topText: { 
      position: 'relative',
      width: '100%', 
      top: '15%', 
      color: `${themes.secondary}`, 
      fontSize: '24px', 
      fontWeight: '600',
  },
  emailInput: { 
      width: '66%',
      textAlign: 'center',
      outline: 'none',
      padding: '10px',
      borderRadius: '12px',
      border:  `2px solid ${themes.secondary}`,
      color: `${themes.secondary}`, 
  },
  bottomText: { 
      position: 'absolute', 
      width: '100%', 
      top: '60%', 
      color:  `${themes.secondary}`, 
      fontSize: '24px', 
      fontWeight: '600' 
  },
  loadingDiv: { 
      position: 'absolute', 
      height: '100%', 
      width: '100%', 
      textAlign: 'center', 
      backgroundColor: 'white',
  },
  loadingIcon: { 
      color: `${themes.primary}`, 
      position: 'absolute', 
      top: 'calc(50% - 51px)', 
      left: 'calc(50% - 51px)',  
      fontWeight: '600',
  },
  chatEngineWindow: {
      width: '100%',  
      backgroundColor: '#fff',
  }
}