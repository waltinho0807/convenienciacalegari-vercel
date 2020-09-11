import Link from 'next/link';

const OfferArea = () => {
    return(
        <>
            <section className="offer-area">
                <div className="offer-content">
                    <span className="sub-title">Ofertas Limitadas!</span>
                    <h2>20% Desconto</h2>
                    <p>Pacote de Espetos</p>
                    <Link href="#">
                        <a onClick={e => e.preventDefault()} className="default-btn">Descubra Agora</a>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default OfferArea;