const quotes = [
    {
        quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author: "아인슈타인"
    },{
        quote:"해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author:"톨스토이"
    },{
        quote:"사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author:"괴테"
    },{
        quote:"화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
        author:"마크 트웨인"
    },{
        quote:"이룰수 없는 꿈을 꾸고 이길수 없는 적과 싸우며, 이룰수 없는 사랑을 하고 견딜 수 없는 고통을 견디고,잡을수 없는 저 하늘의 별도 잡자",
        author:"세르반테스"
    },{
        quote:"고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오",
        author:"헬렌켈러"
    },{
        quote:"사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다",
        author:"생텍쥐베리"
    },{
        quote:"행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다",
        author:"헬렌켈러"
    },{
        quote:"곧 위에 비교하면 족하지 못하나,아래에 비교하면 남음이 있다.",
        author:"명심보감"
    },{
        quote:"그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
        author:"호라티우스"
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const number = Math.floor(Math.random()*quotes.length);
console.log(`number: ${number}`);
setQuote(number);

function setQuote(index){
    console.log(quotes[index]);
    quote.innerText=quotes[index].quote;
    author.innerText = quotes[index].author;
}