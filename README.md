# Backend-test
> 백엔드 API를 테스트하기 위한 단순한 echo 서버입니다.

## 서버 시작하기
```bash
$ yarn
$ nodemon
```

## API
 - `POST` **/api/analyze-sentence**
   - **object** *(body)*: 
   ```javascript
   {
       "sentence": "입력할 문장"
   }
   ```
   - **response**
   ```javascript
   {
       "result": ["결과값 리스트(배열)"]
   }
   ```
   - 본 API에서는 **받은 값에 상관 없이 5초 후에 response**하도록 제작되었습니다.

## 참고
 - [Heroku+node.js 빠른시작](https://victorydntmd.tistory.com/112)
 - [상세 설명](https://poiemaweb.com/nodejs-heroku)

