import React from 'react';

const CreateUser = ({ username, email, onChange, onInsert }) => {
    console.log('create user');
    return (
        <div>
            <div>
                <label>
                    이름
                    <input
                        name='username'
                        onChange={onChange}
                        value={username}
                    />
                </label>
            </div>
            <div>
                <label>
                    이메일
                    <input
                        name='email'
                        onChange={onChange}
                        value={email}
                    />
                </label>
            </div>
            <button onClick={onInsert}>등록</button>
        </div>
    );
}

// React.memo를 사용하면 컴포넌트 리-랜더링 최적화
// 해당 컴포넌트의 props가 바뀌지 않았다면,
// 리-렌더링을 방지하여, 최적화할 수 있습니다.
export default React.memo(CreateUser);