## 당신 근처의 당근마켓

<img width="1436" alt="스크린샷 2022-12-18 오전 4 46 30" src="https://user-images.githubusercontent.com/108744804/208263650-3a5e4435-27a6-4918-a829-572f08ef6ad3.png">


## 프로젝트 설명

> [당근마켓](https://github.com/daangnCloneProject/daangn_FE) 기존 당근마켓 클론코딩 프로젝트를 vite & typeScript 환경으로 마이그레이션 

- 진행 기간 : 2022-12-08 ~ 2022-12-18

<br />

## 데모 & 구현 방법

<details>
<summary>React-hook-form을 사용한 로그인, 회원가입 구현방식에서  useForm의 기능을 커스텀훅으로 자체구현해서 사용 [https://github.com/jong6598/daangn_FE_refactoring/pull/7]</summary>

### 결과물

`로그인 화면`

<img width="425" alt="스크린샷 2022-12-18 오전 4 09 25" src="https://user-images.githubusercontent.com/108744804/208259748-58165a1b-0915-4432-aad9-c1e4879df46a.png">

`회원가입 화면`

<img width="405" alt="스크린샷 2022-12-18 오전 4 09 03" src="https://user-images.githubusercontent.com/108744804/208259854-459bb57c-7b8d-4c56-a82d-a5beb950018f.png">



### 구현방법

`useForm의 커스텀훅 구현`

- 로그인과 회원가입시 input의 value를 받는 values state와 error 상태를 보여주는 error state를 사용하여 로그인 회원가입에 사용하던 React-hook-form 대체

`useForm hook`
```ts
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
```

`validation 유틸 함수`

```tsx
type Props = {
	username: string;
	password: string;
	nickname?: string;
	confirmPassword?: string;
};

const validateSign = ({ username, password, nickname, confirmPassword }: Props) => {
	const errors = {
		username: '',
		password: '',
		nickname: '',
		confirmPassword: '',
	};

	if (username === '') {
		errors.username = '아이디가 입력되지 않았습니다.';
	} else if (username.length < 3) {
		errors.username = '4자 이상의 아이디를 사용해주세요.';
	}

	if (password === '') {
		errors.password = '비밀번호가 입력되지 않았습니다.';
	} else if (password.length <= 4) {
		errors.password = '6자 이상의 패스워드를 사용해주세요.';
	}

	if (nickname === '') {
		errors.nickname = '닉네임이 입력되지 않았습니다.';
	} else if (nickname !== undefined && nickname.length > 10) {
		errors.nickname = '10자 이하의 닉네임을 사용해주세요.';
	}

	if (confirmPassword === '') {
		errors.confirmPassword = '비밀번호를 확인해주세요.';
	} else if (confirmPassword !== password) {
		errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
	}

	return errors;
};

export default validateSign;
```

`=> input 입력시 마다 validation을 실행하고 이를 기반으로 에러 메세지 출력`

`hook 사용부`

```tsx
const { values, errors, handleChange, handleSubmit } = useForm({
		initialValues: { username: '', password: '' },
		onSubmit: async (values: object) => {
			const payload = await signin(values);
			localStorage.setItem('TOKEN', payload.token);
			localStorage.setItem(
				'userInfo',
				JSON.stringify({ userId: payload.userId, username: payload.username, nickname: payload.username }),
			);
			navigate('/home');
		},
		validateSign,
	});
```
</details>

<br />

<details>
<summary>재사용을 고려하지 않은 컴포넌트 중복 작성 방식에서, 컴포넌트 재사용을 고려하여 드롭다운 · 검색창 등 공통 컴포넌트 구현 [https://github.com/jong6598/daangn_FE_refactoring/pull/8]</summary>
	

### 결과물
  
<img width="655" alt="스크린샷 2022-12-18 오전 4 16 19" src="https://user-images.githubusercontent.com/108744804/208261401-3279b5bf-8abc-4310-a2e7-b14b8370761e.png">

### 구현 방법

> 💫 dropDown 공통 컴포넌트를 생성하고, props를 전달하는 방식으로 필터링 드롭다운 구현
  
+ 기존방식 (select를 사용하여 개별 컴포넌트에서 각각 만들어서 사용)
```jsx
            <Areabar>
              <select onChange={handleArea} ref={area_ref}>
                <option value="ALL">대구시 전체</option>
                <option value="NAMGU">남구</option>
               ...
              </select>
            </Areabar>
            <Navbar>
              <select onChange={handleCategory} ref={category_ref}>
                <option value="ALL">전체 카테고리</option>
                <option value="DIGITAL">디지털기기</option>
            ...
              </select>
            </Navbar>
```

    => 재사용을 고려하여 공통 드롭다운 컴포넌트를 구현하고, 각각의 option table을 정의하여 컴포넌트 재사용

+ 변경후 

```tsx
type Props = {
	dropdownTarget: string;
	options: Array<{ id: number; value: string; renderText: string }>;
	onDropdownChange: (value: string, changeTarget: string) => void;
};

const DropDown = (props: Props) => {
	const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		props.onDropdownChange(event.currentTarget.value, event.currentTarget.dataset.dropdownTarget!);
	};

	return (
		<select data-dropdown-target={props.dropdownTarget} onChange={handleDropdownChange}>
			{props.options.map((option: { id: number; value: string; renderText: string }) => {
				return (
					<option key={option.id} value={option.value}>
						{option.renderText}
					</option>
				);
			})}
		</select>
	);
};

export default DropDown;

```
```tsx
const AreaOptions = [
	{ id: 1, value: 'ALL', renderText: '대구시 전체' },
	{ id: 2, value: 'NAMGU', renderText: '남구' },
	{ id: 3, value: 'DALSEOGU', renderText: '달서구' },
	{ id: 4, value: 'DALSEONGGUN', renderText: '달성군' },
	{ id: 5, value: 'DONGGU', renderText: '동구' },
	{ id: 6, value: 'BUKGU', renderText: '북구' },
	{ id: 7, value: 'SEOGU', renderText: '서구' },
	{ id: 8, value: 'SUSEONGGU', renderText: '수성구' },
	{ id: 9, value: 'JUNGGU', renderText: '중구' },
];
```
<br />

</details>

<br />

<details>
<summary> CRA(create react app) => vite 마이그레이션을 통한 build time 단축 </summary>
	
### 결과물
  
- 기존 CRA build time (11.46s)
  
<img width="303" alt="스크린샷 2022-12-18 오전 4 20 15" src="https://user-images.githubusercontent.com/108744804/208262587-9597e21a-16b0-4465-be1b-f27c818feec3.png">

- vite 환경 build time (4.02s)

<img width="499" alt="스크린샷 2022-12-18 오전 4 14 00" src="https://user-images.githubusercontent.com/108744804/208262616-aada480a-617d-4267-9bd1-be78b3cb09c7.png">

</details>
	
<br />

<details>
<summary>errorBoundary 를 활용한 error handling [https://github.com/jong6598/daangn_FE_refactoring/pull/17]</summary>
	

### 결과물

![에러바운더리](https://user-images.githubusercontent.com/108744804/212015961-b2f38aaf-bef2-4a54-a220-a7414241071d.png)

### 구현 방법
> 💫 errorBoundary 구현
```tsx
import { ElementType, ReactNode, Component } from 'react';

import { AxiosError } from 'axios';

interface Props {
	fallback: ElementType;
	children?: ReactNode;
}

interface State {
	shouldHandleError: boolean;
	shouldRethrow: boolean;
	error: Error | AxiosError | null;
}

const initialState: State = {
	shouldHandleError: false,
	shouldRethrow: false,
	error: null,
};

class ApiErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = initialState;
	}

//401에러 클라이언트가 인증되지 않았을 때 발생하는 에러로, 흔히 말하는 로그인 에러이다.
//로그인 에러의 경우 상위 GlobalErrorBoundary로 error를 전파하여 공통로직으로 처리한다.
	public static getDerivedStateFromError(error: Error | AxiosError): State {
		if (error instanceof AxiosError) {
			if (error.response?.status === 401) {
				return {
					shouldHandleError: false,
					shouldRethrow: true,
					error,
				};
			}
		}
		return { shouldHandleError: true, shouldRethrow: false, error };
	}

	componentDidCatch(error: Error): void {
		console.log(error, 'api에러바운더리');
	}

	public render() {
		const { shouldHandleError, shouldRethrow, error } = this.state;
		const { children } = this.props;

//shouldRethrow가 true일때 상위 에러바운더리로 에러를 전파한다.
		if (shouldRethrow) {
			throw error;
		}
//shouldHandleError가 false 일때 정상적인 컴포넌트를 렌더링 해준다.
		if (!shouldHandleError) {
			return children;
		}
//shouldRethrow가 false, shouldHandleError가 true 일때, 에러를 처리해줄 fallback UI
//onReset에는 shouldHandleError를 false로 setState하여 children을 re-mount 시켜 정상적인 UI를 다시 렌더링한다.
		return <this.props.fallback onReset={() => this.setState({ shouldHandleError: false })} />;
	}
}

export default ApiErrorBoundary;
```
+ Api 요청한 데이터를 렌더링 시켜주는 컴포넌트를 분리하고 상위를 ApiErrorBoundary를 감싸서, api 요청 실패로 인한 에러는 컴포넌트 부분적으로 처리하고, 로그인 에러와 같은 공통적으로 처리할 에러들은 상위 GlobalErrorBoundary로 rethrow 하여 처리하는 로직으로 구현

</details>

<br />

<details>
<summary>비즈니스 부분 개선사항: 실종정보 컴포넌트 추가</summary>
	
+ 당근마켓이 `동네사람간의 거래, 이웃간의 연결`을 모토로 시작한 당근마켓의 핵심가치와 지역커뮤니티를 기반으로 빠른 정보등을 유저들끼리 제공할 수 있는 당근마켓의 특성이 이러한 정보 업데이트에 도움이 될것으로 판단
	
+ 실종사건이나 분실 등의 상황에서 인스타그램, 트위터 같은 sns와 당근마켓에 게시글을 썼다는 제보자들의 sns글을 보면서 이러한 기능을 추가한다면 기업의 사회적 역할을 제고하고, 이는 당근마켓의 활성화로 선순환 될수 있을 듯 함.

### 결과물
<img width="639" alt="스크린샷 2023-01-12 오후 5 13 11" src="https://user-images.githubusercontent.com/108744804/212016674-519bbdb0-8657-4a6d-91f7-20334e8a6d30.png">

<img width="644" alt="스크린샷 2023-01-12 오후 5 12 30" src="https://user-images.githubusercontent.com/108744804/212016704-15c54780-146e-4819-a657-8e4d9e072835.png">

<img width="643" alt="스크린샷 2023-01-12 오후 5 13 53" src="https://user-images.githubusercontent.com/108744804/212016732-8c200cc7-32a2-4b35-80a9-b03bd6643f23.png">

### 구현 방법
> 💫 ToggleSwitch 컴포넌트 구현
```tsx
import { ChangeEvent, useEffect, useState } from 'react';

import { ToggleSwitchWrap, SwitchWrap } from './styled';

type Props = {
	storageKey: string;
	switchLabel: string;
};

const ToggleSwitch = ({ storageKey, switchLabel }: Props) => {
	const [switchState, setSwitchState] = useState(JSON.parse(localStorage.getItem('Agreement') || 'true'));

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSwitchState(!switchState);
	};

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(switchState));
	}, [switchState]);

	return (
		<SwitchWrap>
			<ToggleSwitchWrap checked={switchState}>
				<input id="checkbox" type="checkbox" checked={switchState} onChange={handleOnChange} />
			</ToggleSwitchWrap>
			<span>
				{switchLabel} {switchState ? 'On' : 'Off'}
			</span>
		</SwitchWrap>
	);
};

export default ToggleSwitch;	
```

+ storageKey, switchLabel을 props로 받는 ToggleSwitch 컴포넌트 구현
+ 마이페이지에서 버튼을 사용하고, 버튼의 상태에 따라 postListPage에서 실종정보를 보여줌
+ 단계를 발전시켜서 swiper를 추가하거나 따로 상세페이지 연결을 통해 정보를 더 얻을 수 있는 페이지로 라우팅 하는 등의 방식을 통해 보완 가능할듯.
</details>

<br />

	
  	
	

## 배포 링크
 - http://daangnvite.s3-website.ap-northeast-2.amazonaws.com/

## 실행 방법

### 0. 레포지토리 클론

```bash
# Clone Front Repo
git clone https://github.com/jong6598/daangn_FE_refactoring.git
```

### 1. 프로젝트 실행

```bash
# 새로운 터미널 실행

# .env 파일 생성 후 추가
VITE_BASE_API_URL = http://3.35.141.113/

# Install Front Dependency
yarn install

# Run Front Project
yarn run dev
```

### 2. 테스트용 아이디

```bash
id: test
pw: 111111
```

<br />


## 시연 영상

+ 마이그레이션 이전 프로젝트 시연 참고영상

https://www.youtube.com/watch?v=buMKHvXKEAY

<br />

## 과제 달성 사항 및 해결 방법

### 필수 구현 범위

- 로그인 & 회원가입 페이지
    - 기본구현 사항
      - [x] 로그인 페이지 UI 구현
      - [x] 로그인 기능 구현
      
- 거래목록 페이지
    - 기본구현 사항
      - [x] 게시글 개별로 컴포넌트 분리
      - [x] 거래 목록페이지 무한스크롤 구현
      - [x] 게시글 작성을 누르면 작성 페이지로 라우팅
      - [x]  각 게시물 클릭시 상세페이지로 라우팅
    - 추가 구현 예정 사항 
      - [ ] 위로가기 버튼 생성 후 목록페이지 최상단으로 이동할수 있는 유저편의 제공
      
- 마이페이지
    - 기본구현 사항 (현재 2-4 로직 구현은 되어있으나 서버에러로 테스트 불가능한 상태)
      - [x] 마이페이지 상단 유저 네임을 비롯한 유저 정보 제공
      - [x] 마이페이지 좋아요 목록 구현
      - [x] 마이페이지 내가 쓴글 목록 구현
      - [x] 버튼 클릭시 두 목록이 변경되면서 무한스크롤로 구현
      
- 게시물 상세페이지
    - 기본구현 사항 
      - [x] 거래를 위한 게시글의 상세페이지 구현
      - [x] 서버에서 받아오는 정보를 대부분 노출
    - 추가 구현 예정 사항 
      - [ ]  채팅을 눌러서 실시간 채팅으로 연결 가능
      
- 게시물 작성페이지
    - 기본구현 사항 
      - [x] 게시글 작성 기능 구현
      - [x] 작성 완료 시 그 게시물 상세페이지로 라우팅
      - [x] 작성 취소 시 이전페이지로 라우팅
    - 추가 구현 예정 사항 
      - [ ] 이미지는 파이어베이스나 s3 스토리지를 사용해서 저장후 백엔드에 링크 넘겨주는 방식

<br />


## 기술스택 & 레포지토리 구조


<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black"> <img src="https://img.shields.io/badge/react-router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">    <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">    <img src="https://img.shields.io/badge/eslint-181717?style=for-the-badge&logo=eslint&logoColor=white">      <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">     <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">     <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react query&logoColor=white"> 
<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled component&logoColor=white">

<br />

[레포지토리 구조](https://github.com/jong6598/daangn_FE_refactoring/wiki/%EB%A0%88%ED%8F%AC%EC%A7%80%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0)

<br />

## 코드컨벤션

1. [Convention Rule](https://github.com/jong6598/daangn_FE_refactoring/wiki) 을 정의 & 실천합니다.

- git flow 방식으로 개발합니다. feature/개발기능명 으로 브랜치를 생성하고 작업한 후 develop에 merge하고, 테스트 후 main에 merge 하는 방식을 사용하고 있습니다.
- 설정해둔 issue와 pull request 컨벤션을 기반으로 merge 과정에서 issue에 기반한 pull request를 자세히 작성하는 방식으로, 개발의 단계와 흐름을 코드 작성자가 아니더라도 이해할 수 있도록 노력하고 있습니다. 

## 추가 테스크


1.  - [x] errorBoundary & suspense 설정을 통한 error, loding 상태 핸들링 => https://github.com/jong6598/daangn_FE_refactoring/pull/17

	
2. - [x] import 순서, css 순서 컨벤션 따라 정리 & 절대경로 설정 => https://github.com/jong6598/daangn_FE_refactoring/pull/14

 

## 참고자료

- 클론프로젝트 당시 api 명세가 기록된 notion 링크 (https://woozy-fox-83c.notion.site/5fd25cd828c94d6bab199cd3332af283)
 
