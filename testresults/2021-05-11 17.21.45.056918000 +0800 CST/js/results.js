
var setUpStartUnixNano = 0;
var setUpStart = "";
var setUpEndUnixNano = 0;
var setUpEnd = "";

var normalStartUnixNano = 1620724905168907000;
var normalStart = "2021-05-11 17:21:45.168907";
var normalEndUnixNano = 1620724906452843000;
var normalEnd = "2021-05-11 17:21:46.452843";

var tearDownStartUnixNano = 0;
var tearDownStart = "";
var tearDownEndUnixNano = 0;
var tearDownEnd = "";

var gStartUnixNano = 1620724905168907000;
var gStart = "2021-05-11 17:21:45.168907";
var gEndUnixNano = 1620724906452843000;
var gEnd = "2021-05-11 17:21:46.452843";

var tcResults = [{"TcName":"Setup-001","IfGlobalSetUpTearDown":"GlobalSetUp","Priority":"1","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/Setup.json","CsvFile":"","CsvRow":"","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:45.168907","EndTime":"2021-05-11 17:21:45.534649","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"},{"AssertionResults":"Failed","ReponsePart":"HTTP.Body","FieldName":"$(body).title","AssertionKey":"Equals","ActualValue":"_null_key_","ExpValue":"肖申克的救赎"}],"StartTimeUnixNano":1620724905168907000,"EndTimeUnixNano":1620724905534649000,"DurationUnixNano":365742000,"DurationUnixMillis":365,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageSize=12\u0026pageIndex=1","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"GET-movie-subject-TC001","IfGlobalSetUpTearDown":"RegularCases","Priority":"1","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/FirstTeseCase.json","CsvFile":"","CsvRow":"","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:45.640589","EndTime":"2021-05-11 17:21:45.697586","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"},{"AssertionResults":"Failed","ReponsePart":"HTTP.Body","FieldName":"$(body).title","AssertionKey":"Equals","ActualValue":"_null_key_","ExpValue":"肖申克的救赎"}],"StartTimeUnixNano":1620724905640589000,"EndTimeUnixNano":1620724905697586000,"DurationUnixNano":56997000,"DurationUnixMillis":56,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt1-4","IfGlobalSetUpTearDown":"RegularCases","Priority":"2","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt1.csv","CsvRow":"5","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:45.80071","EndTime":"2021-05-11 17:21:45.848124","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724905800710000,"EndTimeUnixNano":1620724905848124000,"DurationUnixNano":47414000,"DurationUnixMillis":47,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt1-1","IfGlobalSetUpTearDown":"RegularCases","Priority":"2","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt1.csv","CsvRow":"2","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:45.80068","EndTime":"2021-05-11 17:21:45.893677","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724905800680000,"EndTimeUnixNano":1620724905893677000,"DurationUnixNano":92997000,"DurationUnixMillis":92,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageSize=12\u0026pageIndex=1","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt1-2","IfGlobalSetUpTearDown":"RegularCases","Priority":"2","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt1.csv","CsvRow":"3","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:45.80071","EndTime":"2021-05-11 17:21:45.94483","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724905800710000,"EndTimeUnixNano":1620724905944830000,"DurationUnixNano":144120000,"DurationUnixMillis":144,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt1-3","IfGlobalSetUpTearDown":"RegularCases","Priority":"2","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt1.csv","CsvRow":"4","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:45.800835","EndTime":"2021-05-11 17:21:45.983727","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724905800835000,"EndTimeUnixNano":1620724905983727000,"DurationUnixNano":182892000,"DurationUnixMillis":182,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt2-3","IfGlobalSetUpTearDown":"RegularCases","Priority":"3","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt2.csv","CsvRow":"4","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:46.088323","EndTime":"2021-05-11 17:21:46.140438","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":500},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724906088323000,"EndTimeUnixNano":1620724906140438000,"DurationUnixNano":52115000,"DurationUnixMillis":52,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt2-1","IfGlobalSetUpTearDown":"RegularCases","Priority":"3","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt2.csv","CsvRow":"2","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:46.088301","EndTime":"2021-05-11 17:21:46.142198","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":500},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724906088301000,"EndTimeUnixNano":1620724906142198000,"DurationUnixNano":53897000,"DurationUnixMillis":53,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt2-4","IfGlobalSetUpTearDown":"RegularCases","Priority":"4","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt2.csv","CsvRow":"5","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:46.242647","EndTime":"2021-05-11 17:21:46.287907","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724906242647000,"EndTimeUnixNano":1620724906287907000,"DurationUnixNano":45260000,"DurationUnixMillis":45,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"SecondTestCase-dt2-2","IfGlobalSetUpTearDown":"RegularCases","Priority":"4","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/SecondTeseCase.json","CsvFile":"testcases/Demo/SecondTeseCase_dt2.csv","CsvRow":"3","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:46.24273","EndTime":"2021-05-11 17:21:46.290779","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"}],"StartTimeUnixNano":1620724906242730000,"EndTimeUnixNano":1620724906290779000,"DurationUnixNano":48049000,"DurationUnixMillis":48,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageSize=12\u0026pageIndex=1","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null},{"TcName":"Teardown-001","IfGlobalSetUpTearDown":"GlobalTearDown","Priority":"1","ParentTestCase":"root","FunctionAreas":null,"TestSuite":"","SetUpResult":"NoSetUp","SetUpTestMessages":[],"Path":"https://api.douban.com/v2/movie/subject/1292052","Method":"GET","JsonFilePath":"testcases/Demo/Teardown.json","CsvFile":"","CsvRow":"","MutationArea":"","MutationCategory":"","MutationRule":"","MutationInfo":{"CurrValue":null,"FieldPath":null,"FieldSubType":"","FieldType":"","MutatedValue":null},"HttpResult":"Fail","ActualStatusCode":403,"StartTime":"2021-05-11 17:21:46.392443","EndTime":"2021-05-11 17:21:46.452843","HttpTestMessages":[{"AssertionResults":"Failed","ReponsePart":"HTTP.Status","FieldName":"$(status).statusCode","AssertionKey":"Equals","ActualValue":403,"ExpValue":200},{"AssertionResults":"Failed","ReponsePart":"HTTP.Headers","FieldName":"$(headers).Content-Type","AssertionKey":"Contains","ActualValue":"application/json; charset=utf-8","ExpValue":"application/json;charset=UTF-8"},{"AssertionResults":"Failed","ReponsePart":"HTTP.Body","FieldName":"$(body).title","AssertionKey":"Equals","ActualValue":"_null_key_","ExpValue":"肖申克的救赎"}],"StartTimeUnixNano":1620724906392443000,"EndTimeUnixNano":1620724906452843000,"DurationUnixNano":60400000,"DurationUnixMillis":60,"TearDownResult":"NoTearDown","TearDownTestMessages":[],"TestResult":"Fail","HttpUrl":"https://api.douban.com/v2/movie/subject/1292052?pageIndex=1\u0026pageSize=12","CaseOrigin":null,"GlobalVariables":null,"Session":null,"LocalVariables":null,"ActualHeader":null,"ActualBody":null}]