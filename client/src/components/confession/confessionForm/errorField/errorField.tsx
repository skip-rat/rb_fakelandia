
export interface ErrorFieldProps {
    msg: string | undefined;
}

const ErrorField: React.FC<ErrorFieldProps> = ({ msg }: ErrorFieldProps) => (
    <label id='errorField' style={{ color: "red" }}>{msg}</label>
);

export default ErrorField;