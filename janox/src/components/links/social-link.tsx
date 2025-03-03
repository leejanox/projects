import L from './link'
import instagram from '@assets/images/instagram.png'
import facebook from '@assets/images/facebook.png'
import twitter from '@assets/images/twitter.png'
import github from '@assets/images/github.png'
import kakaotalk from '@assets/images/kakaotalk.png'

export default function SocialLink() {

  return (

    <div className="social-links">
        <L id='instagram-link' to='https://github.com/leejanox' target='_blank' rel='norefferer noopener' >
            <img src={instagram}/>
            <span>instagram</span>
        </L>
        <L id='facebook-link' to='https://github.com/leejanox' target='_blank' rel='norefferer noopener'>
            <img src={facebook}/>
            <span>facebook</span>
        </L>
        <L id='twitter-link' to='https://github.com/leejanox' target='_blank' rel='norefferer noopener'>
            <img src={twitter}/>
            <span>twitter</span>
        </L>
        <L id='github-link' to='https://github.com/leejanox' target='_blank' rel='norefferer noopener'>
            <img src={github}/>
            <span>github</span>
        </L>
        <L id='discord-link' to='https://github.com/leejanox' target='_blank' rel='norefferer noopener'>
            <img src={kakaotalk}/>
            <span>kakaotalk</span>
        </L>
    </div>

  )
}
