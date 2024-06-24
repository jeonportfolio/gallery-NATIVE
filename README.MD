## 리액트 네이티브를 활용한 나만의 갤러리 만들기 

## expo 프로젝트 생성 
 -> npx expo init REACT-gallery

## expo Image Picker 사용 
 -> npx expo install expo-image-picker


## 코드 효율성을 위해 커스텀 훅 사용 
-> use-gallery.js 

## 3개의 사진이 가로로 배열 
-> Dimension과 numCloumns 사용 


## 이미지 삭제 기능 
-> 각 이미지에 고유한 아이디를 부여함 
-> 길게 누르면 삭제가 가능함 (deleteImage)

## 이미지 추가 기능 
-> ADD 버튼을 만들어서 추가가능 (허수취급)

## DropDownPicker 사용 

-> 라이브러리에 의존하지 않고 hook으로 직접 만듦

## 앨범추가시 앨범이름 설정 
-> 앨범추가 버튼을 누르면 TextInput이 나오게함 모달사용 (팝업)

## 앨범명 추가 
-> TextInputModal을 활용해 Text의 값을 입력하고 모달을 관리

## Header Dropdown 설정 

-> 기본 창에 있는 화살표를 누르면 Header의 드롭다운이 내려갔다 올라갔다 설정됨 

 ## 앨범 삭제 기능 
 -> deleteAlbum을 통해 alert의 알림을 하고 fliter과정을 거침

 ## 이미지 확대 모달 

 ## 모달 내 이미지 이동 

 -> ArrowButton으로 컴포넌트 화
 -> 각 arrow마다 기능 설정 (왼쪽 - 이전사진, 오른쪽 - 다음사진)
 -> filter처리된 기존의 사진들을 가지고 이용 각 사진의 index의 값을 활용함 
 -> 첫번째와 마지막 사진 예외처리 첫번째 = index가 0일때와 마지막일때 화살표를 없앤다

 ## async storage 사용 

->npx expo install @react-native-async-storage/async-storage 
->이미지 문자열 변화 및 파싱 진행  
->이미지와 앨범 각각 적용

## 보상형 전면 광고 띄우기 (수익화)

-> admob sdk45버젼에서만 사용 가능 npx expo upgrade 45로 다운그레이드 
-> npx expo install expo-ads-admob 로 설치 
-> 리워드 방식 사용 커스텀 훅을 별도로 만든다.
-> 풀랫폼별 ID 관리 (android, ios) 테스트용 별도 설정 