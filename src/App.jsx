import Profile from './components/Profile'

export default function App() {
    return (
                    <div style={{
                        
                        borderRadius: '5px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        
            <Profile 
                avatar={"./euzinha.png"}
                name={"Clarissa Vitoria"}
                bio={"Faço Téc.De Desenvolvimento de Sistemas, tenho 17 anos."}
                email={"vitoria3@gmail.com"}
                phone={"+55(85)994320542"}
                githubUrl={"https://github.com/clarissavih"}
                instagramUrl={"https://www.instagram.com/vicxws._?igsh=MWhzYzh1OGtjMWQ4dQ%3D%3D&utm_source=qr"}
            />
        </div>
    )
}