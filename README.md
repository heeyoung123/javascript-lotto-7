# javascript-lotto-precourse

### 입출력

---

- 로또 구입 금액을 입력받는다.
  - 구입 금액은 1,000원 단위로 입력 받는다.
- 로또 수량을 입력받는다.
- 로또 당첨 번호와 보너스 번호를 입력받는다.
  - 번호는 쉼표를 기준으로 구분한다.
- 당첨 여부 출력
- 수익률 출력

### 로또 발행

---

- 로또 숫자 발행
  - 중복되지 않는 6개의 숫자를 뽑는다.
  - 로또 번호는 오름차순으로 정렬한다.
  - 로또 번호는 1 ~ 45의 자연수여야 한다.
- 로또 수량 계산
  - (입력한 로또 구입 금액)/(로또 1개의 가격)

### 로또 당첨

---

- 당첨 정의

```plain text
	-1등: 6개 번호 일치 / 2,000,000,000원
	-2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
	-3등: 5개 번호 일치 / 1,500,000원
	-4등: 4개 번호 일치 / 50,000원
	-5등: 3개 번호 일치 / 5,000원
```

- 수익률 계산
  - 순이익/투자 비용 x 100
  - 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

## 예외 및 추가 고려사항

- 로또는 100,000원을 초과해서 살 수 없다.
- 1,000원으로 나누어 떨어지지 않으면 에러 처리
- 구분자가 ,가 아니면 에러 처리
- 당첨 번호 6개가 아닌 개수를 입력받을 시 에러 처리
- 보너스 번호 1개가 아닌 개수를 입력받을 시 에러 처리
- 당첨 번호에 중복되는 숫자가 있을 시 에러 처리
- 1~45를 벗어난 숫자 입력 시 에러 처리
- 보너스 번호와 당첨 번호가 중복될 때 에러 처리
