// 1. 메인 슬라이드 이미지
var swiper = new Swiper('.mySwiper', {
  cssMode:true,
  loop:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  pagination:{
    el:".swiper-pagination",
    clickable:'true',
  },
});

//2. 카드스와이퍼 슬라이드
var swiper2 = new Swiper(".mySwiper2", {
  effect: "cards",
  grabCursor: true,
});

//3. 메뉴 클릭시 해당 아이디 박스요소로 스크롤 
const menuLinks = document.querySelectorAll('#gnb > ul > li >  a');
  //반복문 사용 => 각 링크에 이벤트 적용 후 해당 섹션 이동
  //for(초기값;조건식;증감식){실행문}
  for(let i=0;i<menuLinks.length;i++){
    //클릭 이벤트 반복
    menuLinks[i].addEventListener('click', function(e){
      console.log(i); //0,1,2,3,4 출력확인
      e.preventDefault(); //기본에빈트 클릭 제거 > 새로고침 안됨

      //href값으로 이동시 section을 찾음
      //속성값을 변수에 담기
      const targetId = this.getAttribute('href').substring(1);
      //위에서 지정된 변수값을 id값으로 저장 
      const targetSection = document.getElementById(targetId);
      console.log(targetSection); //출력 확인

      const headerHeight = 130; //헤더 영역 높이만큼 값 설정

      //각선택 section이 부드럽게 상단으로 올라오게하기
      window.scrollTo({
        top:targetSection.offsetTop-headerHeight, //선택 section상단 위치와 브라우저 상단과 동일한 위치로 이동
        behavior:'smooth' //부드럽게 이동 
      });
    });
  }

  const menuLinks2 = document.querySelectorAll('#gnb02 > ul > li >  a');
  //반복문 사용 => 각 링크에 이벤트 적용 후 해당 섹션 이동
  //for(초기값;조건식;증감식){실행문}
  for(let i=0;i<menuLinks.length;i++){
    //클릭 이벤트 반복
    menuLinks2[i].addEventListener('click', function(e){
      console.log(i); //0,1,2,3,4 출력확인
      e.preventDefault(); //기본에빈트 클릭 제거 > 새로고침 안됨

      //href값으로 이동시 section을 찾음
      //속성값을 변수에 담기
      const targetId = this.getAttribute('href').substring(1);
      //위에서 지정된 변수값을 id값으로 저장 
      const targetSection = document.getElementById(targetId);
      console.log(targetSection); //출력 확인

      const headerHeight = 130; //헤더 영역 높이만큼 값 설정

      //각선택 section이 부드럽게 상단으로 올라오게하기
      window.scrollTo({
        top:targetSection.offsetTop-headerHeight, //선택 section상단 위치와 브라우저 상단과 동일한 위치로 이동
        behavior:'smooth' //부드럽게 이동 
      });
    });
  }

// 4. overflow 닫기
// 오버레이 열기/닫기 기능
document.addEventListener('DOMContentLoaded', () => {
  // 'openBtn' 클래스를 가진 모든 요소들을 선택합니다.
  const openButtons = document.querySelectorAll('.openBtn01, .openBtn02, .openBtn03');
  
  // 'close_btn' 클래스를 가진 모든 요소들을 선택합니다.
  const closeButtons = document.querySelectorAll('.close_btn');
  
  // 각 열기 버튼에 클릭 이벤트 리스너를 추가합니다.
  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 클릭된 버튼의 클래스명을 가져옵니다 (예: 'openBtn01')
      const btnClass = button.className.split(' ').find(cls => cls.startsWith('openBtn'));
      
      if (btnClass) {
        // 버튼 클래스에 해당하는 오버레이 클래스명을 만듭니다 (예: 'o_cont01')
        const overlayClass = `o_cont${btnClass.slice(-2)}`;
        
        // 해당 오버레이 요소를 찾아서 'active' 클래스를 추가해 표시합니다.
        const overlay = document.querySelector(`.${overlayClass}`);
        if (overlay) {
          overlay.classList.add('active');
        }
      }
    });
  });
  
  // 각 닫기 버튼에 클릭 이벤트 리스너를 추가합니다.
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 닫기 버튼의 부모 요소인 오버레이를 찾아서 'active' 클래스를 제거합니다.
      const overlay = button.closest('article.active');
      if (overlay) {
        overlay.classList.remove('active');
      }
    });
  });
});


// 5. 움짤 제어
const myGif = document.querySelector('.my_gif');
const playBtn = document.querySelector('.play_btn');
const stopBtn = document.querySelector('.stop_btn');

// 정지된 이미지 파일 경로 (GIF의 첫 프레임 등)
const staticImgSrc = '../img/vision_img01.png'; 
// 원본 GIF 파일 경로
const originalGifSrc = '../img/vision.gif';

// GIF를 재생하는 함수
function playGif() {
  myGif.src = originalGifSrc;
  playBtn.style.display = 'none'; // 재생 버튼 숨기기
  stopBtn.style.display = 'block'; // 정지 버튼 보이기
}

// GIF를 멈추는 함수
function stopGif() {
  myGif.src = staticImgSrc;
  playBtn.style.display = 'block'; // 재생 버튼 보이기
  stopBtn.style.display = 'none'; // 정지 버튼 숨기기
}

// 초기 상태: GIF는 재생 중이고 정지 버튼만 보입니다.
window.addEventListener('load', () => {
    playBtn.style.display = 'none';
});

// 이벤트 리스너 추가
playBtn.addEventListener('click', playGif);
stopBtn.addEventListener('click', stopGif);