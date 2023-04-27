import Header from './Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="containers">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
