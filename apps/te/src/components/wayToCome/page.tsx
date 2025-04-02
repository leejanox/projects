import { Canvas } from "react-three-fiber";
import { useState } from "react";

const WayToComePage = () => {

  const [isAsideOpen, setIsAsideOpen] = useState(true)

  return (
    <main>
        <section className="3d_section">
          <Canvas>
            {/* 카메라/조명/환경 설정 */}
            {/* 출발지 선택하면 카메라 이동 */}
            {/* 캐릭터 애니메이션 */}
            {/* 지도 텍스처로 입힌 바닥 */}
          </Canvas>
        </section>
        {/* 햄버거 버튼 */}
        <button
          onClick={() => setIsAsideOpen(prev => !prev)}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow"
        >
          {isAsideOpen ? '✖' : '☰'}
        </button>
        {/* Aside - 토글에 따라 보여짐 */}
        {isAsideOpen && (
          <aside>
            {/* 지도 + 경로 설명 + 버튼들 */}
          </aside>
        )}
    </main>
  )
}

export default WayToComePage