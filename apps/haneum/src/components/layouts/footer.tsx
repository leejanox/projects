

function Footer() {
  return (
    <footer style={{backgroundColor:'#030303',color:'#f3f3f3',width:'100%',position:'absolute',bottom:'0',left:'0'}}>
        <div 
            className="footer-inner"
            style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'0.5rem 0.7rem'}}
        >
            <div 
                className="footer-inner-d"
                style={{display:'flex',alignItems:'end'}}
            >
                <p style={{fontSize:'0.6rem',fontWeight:'700'}}>
                    ట All rights reserved.
                </p>
            </div>
            <div 
                className="footer-inner-i"
                style={{padding:'2rem 0',fontSize:'0.8rem'}}
            >
                <nav>
                    <ol style={{ display: 'flex', flexDirection: 'row', gap: '4rem', fontSize:'0.7rem'}}>
                        <li style={{ display: 'flex', flexDirection: 'column' , gap:'0.5rem'}}>
                            <span style={{ fontSize: '1rem', fontWeight: '700' }}>스미싱 상담 및 신고방법</span>
                            <ul style={{ display:'flex', flexDirection:'column',paddingLeft: '1rem',gap:'0.5rem'}}>
                                <li style={{listStyle:'disc inside'}}>국번없이 118</li>
                                <li style={{listStyle:'disc inside'}}>카카오톡 보호나라 채널 - 스미싱 메뉴</li>
                            </ul>
                        </li>
                        <li>
                            <ul style={{ display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                                <li style={{listStyle:'disc inside'}}>발신번호 거짓표시 신고센터 -</li>
                                <li style={{listStyle:'disc inside'}}>공공 - 금융기관 사칭 전화 차단 시스템-</li>
                                <li style={{listStyle:'disc inside'}}>번호 도용 문자 차단 시스템(기관)-</li>
                            </ul>
                        </li>
                    </ol>
                </nav>
            </div>
            <div 
                className="footer-inner-c"
                style={{display:'flex',justifyContent:'flex-end',alignItems:'end',flexDirection:'column'}}
            >
                <p style={{fontSize:'0.7rem',fontWeight:'bold'}}>+8200000000</p>
                <ol style={{display:'flex',justifyContent:'space-between',gap:'0.3rem',fontSize:'0.6rem'}}>
                    <li>서비스 이용약관</li>
                    <li>|</li>
                    <li>개인정보 처리방침</li>
                </ol>
            </div>
        </div>
    </footer>
  )
}

export default Footer