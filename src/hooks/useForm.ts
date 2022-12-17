import { useState, ComponentProps } from 'react';

type DataProps = {
	username: string;
	password: string;
	nickname?: string;
	confirmPassword?: string;
};

type Props = {
	initialValues: { username: string; password: string; nickname?: string; confirmPassword?: string };
	onSubmit: ({}: DataProps) => void;
	validateSign: any;
};

const useForm = ({ initialValues, onSubmit, validateSign }: Props) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({ username: '', password: '', nickname: '', confirmPassword: '' });

	const handleChange: ComponentProps<'input'>['onChange'] = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		setErrors(validateSign(values));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setErrors(validateSign(values));
		e.preventDefault();
		if (errors.username === '' && errors.password === '') {
			onSubmit(values);
			setValues(initialValues);
		} else {
			alert('빈칸을 채워주세요');
		}
	};

	return {
		values,
		errors,
		handleChange,
		handleSubmit,
	};
};

export default useForm;
