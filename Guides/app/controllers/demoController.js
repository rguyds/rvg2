
app.controller('demoController', function ($scope, $http, $window) {
	$scope.Message = "Hello To AngularJS QuickStart";
	$scope.Messageagain = "Hello";


	$scope.Studentdata = {};

	$scope.submit = function () {
		console.log(angular.toJson($scope.Studentdata));
		$http({
			method: 'POST',
			url: 'http://localhost:53283/SaveStudent',
			data: angular.toJson($scope.Studentdata),
			headers: { 'Content-Type': 'application/json' }
		});
		$window.alert("successfully saved record");
	};
	$scope.update = function () {
		console.log(angular.toJson($scope.Studentdata));
		$http({
			method: 'POST',
			url: 'http://localhost:53283/UpdateStudent',
			data: angular.toJson($scope.Studentdata),
			headers: { 'Content-Type': 'application/json' }
		});
		$window.alert("successfully updated record");
	};
	$scope.delete = function () {
		console.log(angular.toJson($scope.Studentdata));
		$http({
			method: 'POST',
			url: 'http://localhost:53283/DeleteStudent',
			data: angular.toJson($scope.Studentdata),
			headers: { 'Content-Type': 'application/json' }
		});
		$window.alert("successfully deleted record");
	};

	$scope.getData = function () {
		var data = $scope.Studentdata.Student_ID;

		if (data === "" || data === null) {
			console.log("blank");
			$scope.Studentdata.Student_ID = "";
			$scope.Studentdata.First_Name = "";
			$scope.Studentdata.Middle_Name = "";
			$scope.Studentdata.Last_Name = "";
			$scope.Studentdata.Birth_Date = "";
			$scope.Studentdata.Gender = "";
			$scope.Studentdata.Height = "";
			$scope.Studentdata.Weight = "";
			$scope.Studentdata.Blood_Type = "";
			$scope.Studentdata.Contact_Number = "";
			$scope.Studentdata.Email = "";
			$scope.Studentdata.Facebook_Twitter = "";
			$scope.Studentdata.LearnerRefNo = "";
			$scope.Studentdata.Entry_Period = "";
			$scope.Studentdata.Date_Enrolled = "";
			$scope.Studentdata.Date_Started = "";
			$scope.Studentdata.Exam_Result = "";
			$scope.Studentdata.Sponsor = "";
			$scope.Studentdata.Present_Address = "";
			$scope.Studentdata.PMunicipality = "";
			$scope.Studentdata.PZipCode = "";
			$scope.Studentdata.HomeAddress = "";
			$scope.Studentdata.HMunicipality = "";
			$scope.Studentdata.HZipCode = "";
			$scope.Studentdata.FathersName = "";
			$scope.Studentdata.FContactNo = "";
			$scope.Studentdata.FOccupation = "";
			$scope.Studentdata.MothersName = "";
			$scope.Studentdata.MContactNo = "";
			$scope.Studentdata.MOccupation = "";
			$scope.Studentdata.GuardiansName = "";
			$scope.Studentdata.GContactNo = "";
			$scope.Studentdata.Present_Address = "";
			$scope.Studentdata.Present_Address = "";


				}
		else {
			console.log($scope.Studentdata.Student_ID);
			//$http({
			//	method: 'POST',
			//	url: 'http://localhost:53283/GetStudent?id=' + $scope.Studentdata.Student_ID,
			//	data: angular.toJson($scope.Studentdata),
			//	headers: { 'Content-Type': 'application/json' }
			//});
			$http({ method: 'Post', url: 'http://localhost:53283/GetStudent?id=' + data, headers: { 'Content-Type': 'application/json' } })
				.then(function (data, status) {
					if (typeof data.data.Table[0] === "undefined") {
						console.log("no data");
						$scope.Studentdata.First_Name = "";
						$scope.Studentdata.Middle_Name = "";
						$scope.Studentdata.Last_Name = "";
						$scope.Studentdata.Birth_Date = "";
						$scope.Studentdata.Gender = "";
						$scope.Studentdata.Height = "";
						$scope.Studentdata.Weight = "";
						$scope.Studentdata.Blood_Type = "";
						$scope.Studentdata.Contact_Number = "";
						$scope.Studentdata.Email = "";
						$scope.Studentdata.Facebook_Twitter = "";
						$scope.Studentdata.LearnerRefNo = "";
						$scope.Studentdata.Entry_Period = "";
						$scope.Studentdata.Date_Enrolled = "";
						$scope.Studentdata.Date_Started = "";
							$scope.Studentdata.Exam_Result = "";
						$scope.Studentdata.Sponsor = "";	

					} else {
						$scope.Studentdata = data.data.Table[0];
						$scope.Studentdata.Company = data.data.Table[1].Company;
						$scope.Studentdata.FromCompany = data.data.Table[1].FromCompany;
						$scope.Studentdata.ToCompany = data.data.Table[1].ToCompany;
						$scope.Studentdata.Position = data.data.Table[1].Position;
						console.log(data.data);
						console.log($scope.Studentdata);
					}
				})
				.error(function (data, status) {
					console.log("none");
				});

		}
	};


	

	$scope.ERecords = false;
	$scope.ERecordsclass = "fa fa-chevron-up";

	$scope.showEmploymentRecords = function () {
		console.log("test");
		var test = $scope.ERecords;
		if (test === false) {
			$scope.ERecords = true;
			$scope.ERecordsclass = "fa fa-chevron-down";
		}
		else {
			$scope.ERecords = false;

			$scope.ERecordsclass = "fa fa-chevron-up";}
	};

	$scope.PI = false;
	$scope.PIclass = "fa fa-chevron-up";

	$scope.showPI = function () {
		console.log("test");
		var test = $scope.PI;
		if (test === false) {
			$scope.PI = true;
			$scope.PIclass = "fa fa-chevron-down";
		}
		else {
			$scope.PI = false;

			$scope.PIclass = "fa fa-chevron-up";
		}
	};

	$scope.AC = false;
	$scope.ACclass = "fa fa-chevron-up";

	$scope.showAC = function () {
		console.log("test");
		var test = $scope.AC;
		if (test === false) {
			$scope.AC = true;
			$scope.ACclass = "fa fa-chevron-down";
		}
		else {
			$scope.AC = false;

			$scope.ACclass = "fa fa-chevron-up";
		}
	};

	$scope.EB = false;
	$scope.EB = "fa fa-chevron-up";

	$scope.showEB = function () {
		console.log("test");
		var test = $scope.EB;
		if (test === false) {
			$scope.EB = true;
			$scope.EBclass = "fa fa-chevron-down";
		}
		else {
			$scope.EB = false;

			$scope.EBclass = "fa fa-chevron-up";
		}
	};

	$scope.RB = false;
	$scope.RBclass = "fa fa-chevron-up";

	$scope.showRB = function () {
		console.log("test");
		var test = $scope.RB;
		if (test === false) {
			$scope.RB = true;
			$scope.RBclass = "fa fa-chevron-down";
		}
		else {
			$scope.RB = false;

			$scope.RB = "fa fa-chevron-up";
		}
	};

	$scope.OR = false;
	$scope.ORclass = "fa fa-chevron-up";

	$scope.showOR = function () {
		console.log("test");
		var test = $scope.OR;
		if (test === false) {
			$scope.OR = true;
			$scope.ORclass = "fa fa-chevron-down";
		}
		else {
			$scope.OR = false;

			$scope.ORclass = "fa fa-chevron-up";
		}
	};

	$scope.MI = false;
	$scope.MI = "fa fa-chevron-up";

	$scope.showMI = function () {
		console.log("test");
		var test = $scope.MI;
		if (test === false) {
			$scope.MI = true;
			$scope.MIclass = "fa fa-chevron-down";
		}
		else {
			$scope.MI = false;

			$scope.MIclass = "fa fa-chevron-up";
		}
	};



});