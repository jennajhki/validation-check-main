// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

// function isMoreThan4Length(value) {
//   // TODO : 이 함수를 완성하세요.
// }

// function isMatch(password1, password2) {
//   // TODO : 이 함수를 완성하세요.
// }

let elInputUsername = document.querySelector('#username'); 
let elFailureMessage = document.querySelector('.failure-message'); 
let elSuccessMessage = document.querySelector('.success-message'); 

// 사용자가 아이디를 입력할 때
elInputUsername.onkeyup = function () {
	if (isMoreThan4Length(elInputUsername.value)) {
		  // 아이디의 길이가 4와 같거나 길면 성공
		  elSuccessMessage.classList.remove('hide'); 
		  elFailureMessage.classList.add('hide');
	 } else { 
	  	// 아이디의 길이가 4보다 짧으면 실패
		  elSuccessMessage.classList.add('hide'); 
		  elFailureMessage.classList.remove('hide');
	 } 
}; 

function isMoreThan4Length(value) {
 	return value.length >= 4; 
}

const elPassword = document.querySelector('#password');
const elPasswordRetype = document.querySelector('#password-retype');

const elMatch = document.querySelector('.match-message');
const elMismatch = document.querySelector('.mismatch-message');

const elPwSuccess = document.querySelector('.password-success-message');
const elPwFailure = document.querySelector('.password-failure-message');

// 조건: 8자 이상 + 숫자나 특수문자 포함
function isPasswordValid(password) {
  return password.length >= 8 && /[0-9!@#$%^&*]/.test(password);
}

function isMatch(pw1, pw2) {
  return pw1 === pw2;
}

// 비밀번호 입력 시: 유효성 검사
elPassword.onkeyup = function () {
  const pw = elPassword.value;
  if (isPasswordValid(pw)) {
    elPwSuccess.classList.remove('hide');
    elPwFailure.classList.add('hide');
  } else {
    elPwSuccess.classList.add('hide');
    elPwFailure.classList.remove('hide');
  }
};

// 비밀번호 확인 입력 시: 일치 여부 검사
elPasswordRetype.onkeyup = function () {
  const pw1 = elPassword.value;
  const pw2 = elPasswordRetype.value;

  if (isMatch(pw1, pw2)) {
    elMatch.classList.remove('hide');
    elMismatch.classList.add('hide');
  } else {
    elMatch.classList.add('hide');
    elMismatch.classList.remove('hide');
  }
};

