import './loadingSpinner.css';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="spinner">
            <div className="spinner__anim"></div>
            <div className="spinner__text">Loading...</div>
        </div>
    );
}

export default LoadingSpinner;