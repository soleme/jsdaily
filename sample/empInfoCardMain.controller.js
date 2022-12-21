/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// @ts-nocheck
/*eslint no-undef: "error"*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	
	return Controller.extend("solus.empinfocard.controller.empInfoCardMain", {
		onInit: function () {
			if (!jQuery.support.touch) {
				this.getView().addStyleClass("sapUiSizeCompact");
			}
			this.nullstring = ""; //Null값일때 나오는 문자
            // const photoPath = jQuery.sap.getModulePath("com.ds.myProfile") + "/image/"; //이미지경로
            const photoPath = jQuery.sap.getModulePath("solus.empinfocard") + "/image/"; //이미지경로
		
			// Loading create
			this.busyDialog = new sap.m.BusyDialog({
				text: "Loading...",
				customIconWidth: "60px",
				customIconHeight: "60px",
				customIcon: photoPath + "loading.gif",
				customIconDensityAware: false
			});
            this.getView().setModel(new sap.ui.model.json.JSONModel());            
        },
          
		onAfterRendering: function () {
            // this.init();
           
		},

		inits: function () {
            this.deletePage();
			this.initUser();
		},        
        
        personIdExternal:"1528458",
        UserId : "2643871",
		/**
		 * 최초 로그인사용자 호출
		 */ 
		initUser: function() {
			// 1528458 , 320195
			(async() => {
				this.busyDialog.open();
                let oViewModel = this.getView().getModel();
                const oLoginModel = sap.ui.getCore().getModel("LoginInfoModel");
                const userId = oLoginModel.getProperty("/userId");
                const personIdExternal = oLoginModel.getProperty("/personIdExternal");
				let oEmpData = await this.setAddInfo(personIdExternal, userId);
                oViewModel.setProperty("/empInfos", [oEmpData]);
				this.busyDialog.close();
			})();
        },
        
		/**
		 * User에 따른 정보를 불러와 ViewData를 생성한다.
		 * UserId : 유저정보
		 */ 
		setAddInfo: async function (personIdExternal, UserId) {
			return new Promise((resolve, reject) => {
				const oViewModel = this.getView().getModel();
				// const oEmpInfos = oViewModel.getProperty("/empInfos");
				const photoPath = jQuery.sap.getModulePath("solus.empinfocard") + "/image/"; //이미지경로
				const sPersonIdExternal = personIdExternal; 
                const sUserID = UserId; 
                console.warn("sUserID", sUserID)
                const sUserLang = navigator.language || navigator.userLanguage;
				(async() => {
					const sLogoPath = photoPath+"Logo_solus.jpg";				            //로고
					const oUserInfo = await this.getUser(sPersonIdExternal);				//유저정보 
					const oEmployeeClass = await this.getEmployeeClass(sPersonIdExternal);  //경력사항 
					const oEducation = await this.getEducation(sPersonIdExternal);		    //학력정보 
					const oFamilyInfo = await this.getFamilyInfo(sPersonIdExternal);		//가족사항
					let oEmpJobNew = "";										            //발령사항
					let oEmpJobOld = await this.getEmpJobOLD(sPersonIdExternal);			//이전발령사항
					let sVBox1 = "60%";
                    let sVBox2 = "40%";                    
					switch (sUserLang) { //접속Language에 따라 가족사항 호출
						case 'en':
							oEmpJobNew = await this.getEmpJobUS(sPersonIdExternal);
							sVBox1 = "50%";
							sVBox2 = "50%";
                            break;
                        case 'en-US':
							oEmpJobNew = await this.getEmpJobUS(sPersonIdExternal);
							sVBox1 = "50%";
							sVBox2 = "50%";
							break;    
						case 'zh':
							oEmpJobNew = await this.getEmpJobCN(sPersonIdExternal);
                            break;
                        case 'zh-CN':
							oEmpJobNew = await this.getEmpJobCN(sPersonIdExternal);
							break;
						default:
							oEmpJobNew = await this.getEmpJobKR(sPersonIdExternal);
							break;
					}
					const oEmpJob = await this.setEmpJob(oEmpJobOld, oEmpJobNew, sUserLang); //현재 + 이전(발령사항을 합친다)
					let sGender = "", sFirstName = "", sLastName = "", sLL1 = "", sLL2 = "", sLL3 = "", sLL4 = "", sLL5 = "", sLR1 = "", 
                        sLR2 = "", sLR3 = "", sLR4 = "", sBusinessPhone = "", sCellPhone = "", sHomePhone = "", sAddress = "", sOriginGender="";
                            
					if (oUserInfo) { // 유저정보 있을경우 Make Data
						sGender = this.checkGender(oUserInfo.gender);
						sOriginGender = oUserInfo.gender;
						sFirstName = oUserInfo.firstName;
                        sLastName = oUserInfo.lastName;
                        //헤더 좌1
                        sLL1 = this.removeCode(oUserInfo.jobCode);  
                        //헤더 좌2
                        let sLL2Txt1 = "", sLL2Txt2 = "", sLL2Txt3 = "", sLL2Txt4 = "", sLL2Txt5 = "";
                        if(this.onChangeMainListLabel(oUserInfo.custom01Nav)) sLL2Txt1 = this.onChangeMainListLabel(oUserInfo.custom01Nav) + " / ";
                        if(oUserInfo.custom12) sLL2Txt2 = oUserInfo.custom12 + " / ";
                        if(oUserInfo.Custom02) sLL2Txt3 = oUserInfo.Custom02 + " / ";
                        if(this.onChangeMainListLabel(oUserInfo.custom11Nav)) sLL2Txt4 = this.onChangeMainListLabel(oUserInfo.custom11Nav) + " / ";
                        if(this.onChangeMainListLabel(oUserInfo.custom10Nav)) sLL2Txt5 = this.onChangeMainListLabel(oUserInfo.custom10Nav)
                        sLL2 = sLL2Txt1 + sLL2Txt2 + sLL2Txt3 + sLL2Txt4 + sLL2Txt5;
                        //헤더 좌3
                        sLL3 = oUserInfo.department;
                        //헤더 좌4
						sLL4 = this.removeCode(oUserInfo.custom08);
                        //헤더 좌5
                        let sLL5Txt1 = "", sLL5Txt2 = "", sLL5Txt3 = "", sLL5Txt4 = "";
                        if(this.getMultiDateTime(oUserInfo.dateOfBirth)) sLL5Txt1 = this.getMultiDateTime(oUserInfo.dateOfBirth);
                        if(sGender) sLL5Txt2 = sGender + ", ";
                        if(this.checkElapsedDay(oUserInfo.dateOfBirth,"Age")) sLL5Txt3 = this.checkElapsedDay(oUserInfo.dateOfBirth,"Age");
                        if(this.onChangeInfoStatus(oUserInfo.status)) sLL5Txt4 = " / " +this.onChangeInfoStatus(oUserInfo.status)
                        sLL5 = sLL5Txt1 + " (" + sLL5Txt2 + sLL5Txt3 + ")"+ sLL5Txt4;
                        //헤더 우1
                        let sLR1Txt1 = "", sLR1Txt2 = "";
                        if(this.getMultiDateTime(oUserInfo.hireDate)) sLR1Txt1 = this.getMultiDateTime(oUserInfo.hireDate);
                        if(this.checkElapsedDay(oUserInfo.hireDate)) sLR1Txt2 = " (" + this.checkElapsedDay(oUserInfo.hireDate) + ")";
						sLR1 = sLR1Txt1 + sLR1Txt2;
                        //헤더 우2
                        let sLR2Txt1 = "", sLR2Txt2 = "";
                        if(oUserInfo.custom13) sLR2Txt1 = oUserInfo.custom13;
                        if(this.checkElapsedDay(oUserInfo.custom13, "Date")) sLR2Txt2 = " (" + this.checkElapsedDay(oUserInfo.custom13, "Date") + ")";
                        sLR2 = sLR2Txt1 + sLR2Txt2;
                        //헤더 우3
                        let sLR3Txt1 = "", sLR3Txt2 = "";
                        if(oUserInfo.custom03 && oUserInfo.custom03.length === 10) sLR3Txt1 = oUserInfo.custom03;
                        if(oUserInfo.custom03 && oUserInfo.custom03.length === 10) sLR3Txt2 = " (" + this.checkElapsedDay(oUserInfo.custom03, "Date") + ")"
                        sLR3 = sLR3Txt1 + sLR3Txt2;
                        //헤더 우4
                        let sLR4Txt1 = "", sLR4Txt2 = "";
                        if(oUserInfo.custom14) sLR4Txt1 = oUserInfo.custom14
                        if(this.checkElapsedDay(oUserInfo.custom14, "Date")) sLR4Txt2 = " (" + this.checkElapsedDay(oUserInfo.custom14, "Date") + ")";
                        sLR4 = sLR4Txt1 + sLR4Txt2;
                        
						if(oUserInfo.businessPhone && oUserInfo.businessPhone !== "NULL") sBusinessPhone = oUserInfo.businessPhone;
						if(oUserInfo.cellPhone) sCellPhone = oUserInfo.cellPhone;
                        if(oUserInfo.homePhone) sHomePhone = oUserInfo.homePhone;
                        //주소정보
                        let sAddress1 = "", sAddress2 = "", sAddress3 = "", sAddress4 = "";
                        if(oUserInfo.addressLine1) sAddress1 = "("+oUserInfo.addressLine1+") ";
                        if(oUserInfo.state) sAddress2 = oUserInfo.state;
                        if(oUserInfo.addressLine2) sAddress3 = oUserInfo.addressLine2;
                        if(oUserInfo.addressLine3) sAddress4 = oUserInfo.addressLine3;
						sAddress = sAddress1 + sAddress2+" "+sAddress3+" "+sAddress4;
					}
					const sPhotoPath = await this.getPhoto(sUserID, sOriginGender);	//사진정보
					let oCareerSet = [];
					if (oEmployeeClass && oEmployeeClass.length) { //경력사항 있을경우 Make Data
                        oCareerSet = oEmployeeClass;
					}
					let oEducationSet = [];
					if (oEducation && oEducation.length) { //학력정보 있을경우 Make Data
                        oEducationSet = oEducation;
                        oEducationSet.map(person => (person["UserLang"] = sUserLang));
					}
					let oFamilyInfoSet = [];
					if (oFamilyInfo && oFamilyInfo.length) { //가족사항 있을경우 Make Data
						oFamilyInfoSet = this.setFamilyInfo(oFamilyInfo, sUserLang);
					}
					let oIssuanceHistorySet = [];
                    if(oEmpJob && oEmpJob.length) {	//발령사항 있을경우 Make Data
                        // let aEmpjobData = [];
                        // console.warn("oEmpJob",oEmpJob);
                        // for(var i=0; i<9; i++) {
                        //     aEmpjobData.push(oEmpJob[i]);
                        // }
                        // oIssuanceHistorySet = aEmpjobData;
						oIssuanceHistorySet = oEmpJob;
					}
					
					//ViewData를 생성
					const oViewDatas = { 
                        logo    		  : sLogoPath,			//로고
						img				  : sPhotoPath, 		//사진
						firstName		  : sFirstName, 		//한글이름
						lastName		  : sLastName,  		//영어이름
						lL1				  : sLL1,				//상단라인1
						lL2				  : sLL2,				//상단라인2
						lL3				  : sLL3,				//상단라인3
						lL4				  : sLL4,				//상단라인4
						lL5				  : sLL5,				//상단라인5
						lR1				  : sLR1,				//회사입사일 
						lR2				  : sLR2,				//최초입사일 
						lR3				  : sLR3,				//소속발령일 
						lR4				  : sLR4,				//직위발령일
						businessPhone	  : sBusinessPhone, 	//회사전화
						cellPhone		  : sCellPhone,			//휴대전화 
						homePhone		  : sHomePhone,			//집전화 
						address 		  : sAddress,			//현주소 
						careerSet		  : oCareerSet, 		//경력사항
						educationSet	  : oEducationSet,		//학력정보
						familyInfoSet     : oFamilyInfoSet,		//가족사항
                        IssuanceHistorySet: oIssuanceHistorySet,//발령사항
                        IssuanceHistorySet2:"",                 //발령사항2
						vWidth1  		  : sVBox1,				//상단VBox레이아웃1
						vWidth2			  : sVBox2				//상단VBox레이아웃2
					};
                    resolve(oViewDatas)
                    
				})();
			});
		},
		
		/**
		 * 발령사항을 셋팅함
		 * oEmpJobOld : 이전발령사항
		 * oEmpJobNew : 발령사항
		 * sUserLang  : 접속Language
		 */ 
		setEmpJob: function(oEmpJobOld, oEmpJobNew, sUserLang) {
            
            let aEmpJobNewDatas = [];
            if(oEmpJobNew) {
                for(let j=0; j<oEmpJobNew.length; j++) {
                    let sReason = "", sOrgUnit = "", sEmployeeType = "", sJobGroup = "", sPosition1 = "", sPosition2 = "", sSjf = "", sCompany = "", sPositionText="";
                    if(sUserLang === 'en' || sUserLang === 'en-US') {
                        if(oEmpJobNew[j].eventReasonNav) {
                            if(oEmpJobNew[j].eventReasonNav.nameTranslationNav) sReason = oEmpJobNew[j].eventReasonNav.nameTranslationNav.value_en_US;
                        }
                        if(oEmpJobNew[j].employeeClassNav) {
                            if(oEmpJobNew[j].employeeClassNav.picklistLabels) sEmployeeType = oEmpJobNew[j].employeeClassNav.picklistLabels.results;
                        }
                        if(oEmpJobNew[j].customString2Nav) {
                            if(oEmpJobNew[j].customString2Nav.picklistLabels) sJobGroup = oEmpJobNew[j].customString2Nav.picklistLabels.results;
                        }
                        if(oEmpJobNew[j].departmentNav) sOrgUnit = oEmpJobNew[j].departmentNav.name_en_US;
                        if(oEmpJobNew[j].jobCodeNav) sSjf = oEmpJobNew[j].jobCodeNav.name_en_US;
                        if(oEmpJobNew[j].companyNav) sCompany = oEmpJobNew[j].companyNav.name_en_US;
                        if(oEmpJobNew[j].customString6Nav) sPosition1 = oEmpJobNew[j].customString6Nav.externalName_en_US;
                        if(oEmpJobNew[j].customString7Nav) sPosition2 = oEmpJobNew[j].customString7Nav.externalName_en_US;
                    } else if(sUserLang === 'zh' || sUserLang === 'zh-CN') {
                        if(oEmpJobNew[j].eventReasonNav) {
                            if(oEmpJobNew[j].eventReasonNav.nameTranslationNav) sReason = oEmpJobNew[j].eventReasonNav.nameTranslationNav.value_zh_CN
                        }
                        if(oEmpJobNew[j].employeeClassNav) {
                            if(oEmpJobNew[j].employeeClassNav.picklistLabels) sEmployeeType = oEmpJobNew[j].employeeClassNav.picklistLabels.results;
                        }
                        if(oEmpJobNew[j].customString2Nav) {
                            if(oEmpJobNew[j].customString2Nav.picklistLabels) sJobGroup = oEmpJobNew[j].customString2Nav.picklistLabels.results;
                        }
                        if(oEmpJobNew[j].departmentNav) sOrgUnit = oEmpJobNew[j].departmentNav.name_zh_CN;
                        if(oEmpJobNew[j].jobCodeNav) sSjf = oEmpJobNew[j].jobCodeNav.name_zh_CN;
                        if(oEmpJobNew[j].companyNav) sCompany = oEmpJobNew[j].companyNav.name_zh_CN;
                        if(oEmpJobNew[j].customString6Nav) sPosition1 = oEmpJobNew[j].customString6Nav.externalName_zh_CN;
                        if(oEmpJobNew[j].customString7Nav) sPosition2 = oEmpJobNew[j].customString7Nav.externalName_zh_CN;
                    } else {
                        if(oEmpJobNew[j].eventReasonNav){
                            if(oEmpJobNew[j].eventReasonNav.nameTranslationNav) sReason = oEmpJobNew[j].eventReasonNav.nameTranslationNav.value_ko_KR
                        }
                        if(oEmpJobNew[j].employeeClassNav){
                            if(oEmpJobNew[j].employeeClassNav.picklistLabels) sEmployeeType = oEmpJobNew[j].employeeClassNav.picklistLabels.results;
                        }
                        if(oEmpJobNew[j].customString2Nav){
                            if(oEmpJobNew[j].customString2Nav.picklistLabels) sJobGroup = oEmpJobNew[j].customString2Nav.picklistLabels.results;
                        }
                        if(oEmpJobNew[j].departmentNav) sOrgUnit = oEmpJobNew[j].departmentNav.name_ko_KR;
                        if(oEmpJobNew[j].jobCodeNav) sSjf = oEmpJobNew[j].jobCodeNav.name_ko_KR;
                        if(oEmpJobNew[j].companyNav) sCompany = oEmpJobNew[j].companyNav.name_ko_KR;
                        if(oEmpJobNew[j].customString6Nav) sPosition1 = oEmpJobNew[j].customString7Nav.externalName_ko_KR;
                        if(oEmpJobNew[j].customString7Nav) sPosition2 = oEmpJobNew[j].customString7Nav.externalName_ko_KR;
                    }
                    if(sPosition1 !== "" && sPosition2 !== ""){
                        sPositionText = sPosition1+"/"+sPosition2;
                    } else {
                        if(sPosition1 === "") {
                            sPositionText = sPosition2;
                        } else {
                            sPositionText = sPosition1;
                        }
                    }
                    aEmpJobNewDatas.push({
                            actionDate   : this.getMultiDateTime(oEmpJobNew[j].startDate),					//발령일자
                            reason	     : sReason,															//발령사유
                            orgUnit      : sOrgUnit,														//소속
                            employeeType : this.getLocaleLabel(sEmployeeType),								//사원유형
                            jobGroup     : this.getLocaleLabel(sJobGroup),									//직군
                            position     : sPositionText,											        //직위/직책
                            sjf 		 : sSjf,															//SJF
                            company 	 : sCompany, 														//회사
                            sortData     : this.getMultiDateTime(oEmpJobNew[j].startDate).replace(/\-/g,'') //sortData
                    })
                }
                aEmpJobNewDatas.sort(function(a, b){
                    return b.sortData - a.sortData;
                });
            }

            let aEmpJobOldDatas = [];
            if(oEmpJobOld) {
                for(let i=0; i<oEmpJobOld.length; i++) {
                    let sOldReason = "";
                    let sOldEmployeeType = "";
                    let sJobGroup = "";
                    if(oEmpJobOld[i].reasonNav) {
                        if(oEmpJobOld[i].reasonNav.picklistLabels) sOldReason = oEmpJobOld[i].reasonNav.picklistLabels.results;
                    }
                    if(oEmpJobOld[i].employeeGroupNav) {
                        if(oEmpJobOld[i].employeeGroupNav.picklistLabels) sOldEmployeeType = oEmpJobOld[i].employeeGroupNav.picklistLabels.results;
                    }
                    if(oEmpJobOld[i].jobGroupNav) {
                        if(oEmpJobOld[i].jobGroupNav.picklistLabels) sJobGroup = oEmpJobOld[i].jobGroupNav.picklistLabels.results;
                    }
                    aEmpJobOldDatas.push({
                        actionDate   : this.getMultiDateTime(oEmpJobOld[i].actionDate),  				 //발령일자
                        reason	     : this.getLocaleLabel(sOldReason),									 //발령사유
                        orgUnit      : oEmpJobOld[i].orgUnit,											 //소속
                        employeeType : this.getLocaleLabel(sOldEmployeeType),							 //사원유형
                        jobGroup     : this.getLocaleLabel(sJobGroup),									 //직군
                        position     : oEmpJobOld[i].title,												 //직위/직책
                        sjf 		 : "",																 //SJF
                        company 	 : oEmpJobOld[i].company,											 //회사
                        sortData     : this.getMultiDateTime(oEmpJobOld[i].actionDate).replace(/\-/g,'') //sortData
                    })
                }
                aEmpJobOldDatas.sort(function(a, b){
                    return b.sortData - a.sortData;
                });
            }
            const aEmpJobDatas = [
            ...aEmpJobNewDatas,
            ...aEmpJobOldDatas
            ];
			
			return aEmpJobDatas;
		},
		
		/**
		 * 가족정보를 셋팅
		 * oFamilyInfo : 가족정보
		 * sUserLang : 접속Language
		 */ 
		setFamilyInfo: function(oFamilyInfo, sUserLang) {
			let aFamilyInfoDatas = [];
			for(let i=0; i<oFamilyInfo.length; i++) {
				let sName = ""; 
				if(sUserLang === "ko" || sUserLang === "ko-KR") {
					sName = oFamilyInfo[i].firstName
				} else {
					sName = oFamilyInfo[i].lastName
				}
				let sRelationship = "" ,sBirthDate = "" ,sAge = "" ,sGender = "";
				if(oFamilyInfo[i].relationshipTypeNav){
					if(oFamilyInfo[i].relationshipTypeNav.picklistLabels) sRelationship = oFamilyInfo[i].relationshipTypeNav.picklistLabels.results;
				}
				if(oFamilyInfo[i].relPersonNav) sBirthDate = oFamilyInfo[i].relPersonNav.dateOfBirth;
				if(oFamilyInfo[i].relPersonNav) sAge = oFamilyInfo[i].relPersonNav.dateOfBirth;
				if(oFamilyInfo[i].relPersonalNav) sGender = oFamilyInfo[i].relPersonalNav.gender;
				aFamilyInfoDatas.push({
					relationship   : this.getLocaleLabel(sRelationship), //관계
					name	       : sName,								 //성명
					birthDate      : this.getMultiDateTime(sBirthDate),	 //생년월일
					age 		   : this.checkElapsedDay(sAge,"Age"),	 //나이
					gender  	   : this.checkGender(sGender)  		 //성별
				
				})
            }
            // aFamilyInfoDatas.push({
			// 		relationship   : "test",
			// 		name	       : "test",
			// 		birthDate      : "test",
			// 		age 		   : "test",
			// 		gender  	   : "test"
				
            //     });
            //     aFamilyInfoDatas.push({
			// 		relationship   : "test",
			// 		name	       : "test",
			// 		birthDate      : "test",
			// 		age 		   : "test",
			// 		gender  	   : "test"
				
            //     });
            //     aFamilyInfoDatas.push({
			// 		relationship   : "test",
			// 		name	       : "test",
			// 		birthDate      : "test",
			// 		age 		   : "test",
			// 		gender  	   : "test"
				
            //     });
                // aFamilyInfoDatas.push({
				// 	relationship   : "test",
				// 	name	       : "test",
				// 	birthDate      : "test",
				// 	age 		   : "test",
				// 	gender  	   : "test"
				
                // });
                aFamilyInfoDatas.push({
					relationship   : "test",
					name	       : "test",
					birthDate      : "test",
					age 		   : "test",
					gender  	   : "test"
				
                });
                aFamilyInfoDatas.push({
					relationship   : "test",
					name	       : "test",
					birthDate      : "test",
					age 		   : "test",
					gender  	   : "test"
				
                });
                aFamilyInfoDatas.push({
					relationship   : "test",
					name	       : "test",
					birthDate      : "test",
					age 		   : "test",
					gender  	   : "test"
				
                });
                aFamilyInfoDatas.push({
					relationship   : "test",
					name	       : "test",
					birthDate      : "test",
					age 		   : "test",
					gender  	   : "test"
				
                });
               
			return aFamilyInfoDatas;
		},
		
		
		/**
		 * pdf 생성
		 */ 
		printPDF: function () {
			this.busyDialog.open();
			let deferreds = [];
			let doc = new jsPDF('p', 'mm', 'a4');
            var that = this;

			$(".childPrintBox").each(function (number, item) {
                console.warn(number + "height", $(item).height());
				let deferred = $.Deferred();
				//if( i == 0 ) {
				deferreds.push(deferred.promise());
				html2canvas(this, {
					imageTimeout: 3000,
					scale: 1.25
				}).then(function (canvas) {
					// 캔버스를 이미지로 변환
					let imgData = canvas.toDataURL('image/png', 1.0);
					let imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
                    let pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
                    let t1 = 3.7795275591; //1 mm 당 pixel
                    console.log("Page", pageHeight + ", " + (t1 * pageHeight));
                    let imgHeight = canvas.height * imgWidth / canvas.width;
                    console.log("imgHeight", imgHeight);
					let heightLeft = imgHeight;
					let position = 0;

					// 첫 페이지 출력
					if (number > 0) doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
					heightLeft -= pageHeight;

					// 한 페이지 이상일 경우 루프 돌면서 출력
					while (heightLeft >= 20) {
                        position = heightLeft - imgHeight;
                        console.warn("position",position)
						doc.addPage();
						doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
						heightLeft -= pageHeight;
					}
					deferred.resolve();
				});
			});

			$.when.apply($, deferreds).then(function () { // executes after adding all images
				let today = new Date();
				let year  = today.getFullYear();  // 년도
				let month = today.getMonth() + 1; // 월
				let date  = today.getDate();	  // 날짜
				let hours = today.getHours();     // 시
				let minutes = today.getMinutes(); // 분
				let seconds = today.getSeconds(); // 초
				let milliseconds = today.getMilliseconds(); // 밀리
				doc.save('인사카드_' + (year + "" + month + "" + date + "_" + hours + "" + minutes + "" + seconds + "" + milliseconds) + '.pdf');
				that.busyDialog.close();
			});

		},
		
		/**
		 * 페이지 초기화/삭제
		 */ 
		deletePage: function () {
			this.byId("empinfobox").destroyItems();
		},

		//<------------------------------------------------ 사원검색 Start-------------------------------------------------------------------------
        
        /**
         * 사원검색 후 클릭이나 엔터시 
         */
		_handleValueHelpSearch: function (evt) {
            let sValue = evt.getSource().getValue();
			if (sValue.length > 1) {
                this.searchUserName(sValue);
			} 
        },

        handleItemPress:function(){
            const items = this.getSelectedTable();
            let oLSelected = sap.ui.getCore().byId("LSelected");
            oLSelected.setText("Selected: "+items.length);
        },
        
        /**
         * 테이블에서 체크한 인원 가져오기
         */
        getSelectedTable: function(oEvent) {
            var oEmpSearchTable = sap.ui.getCore().byId("EmpSearchTable");
            var contexts = oEmpSearchTable.getSelectedContexts();
            var items = contexts.map(function(c) {
                return c.getObject();
            });
             // var persnoVal = oTable.getSelectedItem().getBindingContext().getProperty("PersNo");
            return items;
        },

        /** 
		 * Dialog 호출
		 */
		handleValueHelpDialog: function(oEvent) {
			if (!this._Dialog) {
				this._Dialog = sap.ui.xmlfragment("solus.empinfocard.view.fragment.Dialog", this);
				this.getView().addDependent(this._Dialog);
            }
            let oModel = new sap.ui.model.json.JSONModel({
                 userData : []     // 사원 검색정보
                ,selectedUserData : [] //선택한 사원정보
                ,searchType : "0"  // 검색타입 0 : 사원 , 1: 사번 , 2:부서
            });
            
            this._Dialog.setModel(oModel);
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._Dialog);
            this._Dialog.open();
            sap.ui.getCore().byId("EmpSearchTable").attachItemPress(this.handleItemPress, this);
		},

		/**
		 * Dialog Close
		 */
		onCloseSearchDialog: function(oEvent) {
			if (this._Dialog) {
				this._Dialog.close();
				this._Dialog.destroyContent();
				this._Dialog = null;
			}
		},

		/**
		 * Dialog 확인버튼 클릭시 
		 */
		onConfirmDialog: function(oEvent) {
            let returnVal = this.getSelectedTable();
			(async() => {
				if (returnVal.length > 0) {
                    this.onCloseSearchDialog();
					this.deletePage();
					let oViewModel = this.getView().getModel();
					this.busyDialog.open();
                    oViewModel.setProperty("/empInfos", null);
                     this.getView().byId("headerTools").setBusy(true);
					for (let i = 0; i < returnVal.length; i++) {
						let oEmpData = await this.setAddInfo(returnVal[i].personIdExternal, returnVal[i].user)
						if (i === 0) {
                            oViewModel.setProperty("/empInfos", [oEmpData]);
							this.busyDialog.close();
						} else {
							let oEmpInfos = oViewModel.getProperty("/empInfos");
							oEmpInfos.push(oEmpData);
							oViewModel.setProperty("/empInfos", oEmpInfos);
						}
                    }
                     this.getView().byId("headerTools").setBusy(false);
				} else {
                    MessageToast.show("조회 할 사원을 선택하여 주세요.");
                }
                                
                var that = this;
                //화면이 1Page 이상 넘어갈경우 계산로직을 넣어 자연스럽게 출력되도록 처리
                setTimeout(() =>  $(".childPrintBox").each( function (number){
                    let iHeight = $(this).height(); 
                    console.warn(">>>>>>",$(this).height());
                    let oViewModel = that.getView().getModel();
                    let oIssuanceHistorySet = oViewModel.getProperty("/empInfos/"+number+"/IssuanceHistorySet");       
                    let oFamilyInfoSet = oViewModel.getProperty("/empInfos/"+number+"/familyInfoSet");     
                    let iFamilyLength = oFamilyInfoSet.length*1;                
                    let iIssuanceHistoryLength = oIssuanceHistorySet.length*1
                    let iDraWCount = iFamilyLength + iIssuanceHistoryLength;
                    if(iDraWCount > 9) {
                        //  if(iHeight > 1257) {
                        // let ochildPrintBoxHeight = 1081;
                        let aIssuanceHistorySet = [];
                        let aIssuanceHistorySet2 = [];
                        let iDrawValue = 9 - iFamilyLength; 
                        oIssuanceHistorySet.map((obj, index)=>{
                            // ochildPrintBoxHeight += 32;  
                            // if(ochildPrintBoxHeight > 1337) {
                            if(index > iDrawValue-1) {
                                aIssuanceHistorySet2.push(obj);
                               console.warn("Next");
                            } else {
                                aIssuanceHistorySet.push(obj);
                                console.warn("index",index);
                            }
                        });
                        oViewModel.setProperty("/empInfos/"+number+"/IssuanceHistorySet", aIssuanceHistorySet);
                        oViewModel.setProperty("/empInfos/"+number+"/IssuanceHistorySet2", aIssuanceHistorySet2);
                    }
                }), 500);
               
			})();
        },
        
		/**
		 * 입력한 유저이름의 데이터를 조회
		 */
		searchUserName: function (sValue) {
            let that = this;
			this.busyDialog.open();
            let oModel = this.getOwnerComponent().getModel("SFModel");
            let oDialogModel = this._Dialog.getModel();
            let sSearchType = oDialogModel.getProperty("/searchType");
            let oLTotal = sap.ui.getCore().byId("LTotal");
            const oSelectedUsers = this.getSelectedTable();
            const oLoginModel = sap.ui.getCore().getModel("LoginInfoModel");
            const company = oLoginModel.getProperty("/company");
            let oSelectedStatTBAR = sap.ui.getCore().byId("SelectedStatTBAR");
            let InputFilter = new sap.ui.model.Filter({     //고정필터
				filters: [
					new sap.ui.model.Filter("status", "EQ", 'f'),
					new sap.ui.model.Filter("status", "EQ", 't'),
                ],
              and: false
            });
            let oFilterOptions = "";
            switch (sSearchType) { // 검색타입 ( default : 사원 , 1: 사번 , 2:부서 )
                case '1':
                    oFilterOptions = {
                        filters: [
                            new sap.ui.model.Filter("userId", "Contains", sValue.toUpperCase())
                        ],
                        and: false
                    };
                    break;
                case '2':
                      oFilterOptions = {
                        filters: [
                            new sap.ui.model.Filter("department", "Contains", sValue.toUpperCase())
                        ],
                        and: false
                    };
                    break;
                default:
                    oFilterOptions = {
                        filters: [
                            new sap.ui.model.Filter("firstName", "Contains", sValue.toUpperCase()),
                            new sap.ui.model.Filter("lastName", "Contains", sValue.toUpperCase())
                        ],
                        and: false
                    };
                    break;
            }
            let InputFilter2 = new sap.ui.model.Filter(oFilterOptions); //SearchType에 따라 변동되는 필터
            const oEmpSearchTable = sap.ui.getCore().byId("EmpSearchTable");
            
            oEmpSearchTable.removeSelections();
            oDialogModel.setProperty("/userData", oSelectedUsers);
            oSelectedUsers.forEach((elem, index) => {
                oEmpSearchTable.setSelectedItem(oEmpSearchTable.getItems()[index])
            })
			oModel.read("/User", {
				filters: [InputFilter,new sap.ui.model.Filter("jobCode", "NE", 'HR_Virtual'),new sap.ui.model.Filter("empInfo/jobInfoNav/company", "EQ", company),InputFilter2],
                // urlParameters: `$select=userId,username,firstName,lastName,custom08,department,custom12,custom02,custom11Nav/externalCode,status,custom12,custom11Nav/localeLabel,personKeyNav/personIdExternal&$expand=custom11Nav,personKeyNav`,
                 urlParameters: '$expand=empInfo/jobInfoNav/customString6Nav,empInfo/jobInfoNav/customString7Nav,empInfo/jobInfoNav/departmentNav,personKeyNav,custom11Nav/picklistLabels&$select=custom11Nav/picklistLabels,status,custom08,personKeyNav/personIdExternal,userId,firstName,lastName,empInfo/jobInfoNav/departmentNav/name_ko_KR,empInfo/jobInfoNav/departmentNav/name_en_US,empInfo/jobInfoNav/departmentNav/name_zh_CN,empInfo/jobInfoNav/customString6Nav/externalName_ko_KR,empInfo/jobInfoNav/customString6Nav/externalName_en_US,empInfo/jobInfoNav/customString6Nav/externalName_zh_CN,empInfo/jobInfoNav/customString7Nav/externalName_ko_KR,empInfo/jobInfoNav/customString7Nav/externalName_en_US,empInfo/jobInfoNav/customString7Nav/externalName_zh_CN',
				success: (oData, response) => {
                    let aUserDatas = oDialogModel.getProperty("/userData");
                    
					if (oData && oData.results && oData.results.length) {
                        (async() => {                        
                        const userRole = oLoginModel.getProperty("/userRole");
                        const userId = oLoginModel.getProperty("/userId");
                        const userLang = navigator.language || navigator.userLanguage;
                        let sLang = userLang.split("-")[0]
                        
						for (let i = 0; i < oData.results.length; i++) {
                            let sDepartmentNav = "";
                            let sCustom12 = "";
                            let sCustom02 = "";
                            if(oData.results[i].empInfo.jobInfoNav.results[0].departmentNav) {
                                console.warn("osLang",sLang)
                                if(sLang === "ko") {
                                    sDepartmentNav = oData.results[i].empInfo.jobInfoNav.results[0].departmentNav.name_ko_KR;
                                } else if(sLang === "zh") {
                                    sDepartmentNav = oData.results[i].empInfo.jobInfoNav.results[0].departmentNav.name_zh_CN;
                                } else {
                                    sDepartmentNav = oData.results[i].empInfo.jobInfoNav.results[0].departmentNav.name_en_US;   
                                }
                                if(sDepartmentNav === "" || sDepartmentNav === null) {
                                    sDepartmentNav = oData.results[i].empInfo.jobInfoNav.results[0].departmentNav.name_en_US;   
                                }
                            }
                            if(oData.results[i].empInfo.jobInfoNav.results[0].customString7Nav) {
                                if(sLang === "ko") {
                                    sCustom12 = oData.results[i].empInfo.jobInfoNav.results[0].customString7Nav.externalName_ko_KR;
                                } else if(sLang === "zh") {
                                    sCustom12 = oData.results[i].empInfo.jobInfoNav.results[0].customString7Nav.externalName_zh_CN;
                                } else {
                                    sCustom12 = oData.results[i].empInfo.jobInfoNav.results[0].customString7Nav.externalName_en_US;   
                                }
                                if(sCustom12 === "" || sCustom12 === null) {
                                    sCustom12 = oData.results[i].empInfo.jobInfoNav.results[0].customString7Nav.externalName_en_US;   
                                }
                            }

                            if(oData.results[i].empInfo.jobInfoNav.results[0].customString6Nav) {
                                if(sLang === "ko") {
                                    sCustom02 = oData.results[i].empInfo.jobInfoNav.results[0].customString6Nav.externalName_ko_KR;
                                } else if(sLang === "zh") {
                                    sCustom02 = oData.results[i].empInfo.jobInfoNav.results[0].customString6Nav.externalName_zh_CN;
                                } else {
                                    sCustom02 = oData.results[i].empInfo.jobInfoNav.results[0].customString6Nav.externalName_en_US;   
                                }
                                if(sCustom02 === "" || sCustom02 === null) {
                                    sCustom02 = oData.results[i].empInfo.jobInfoNav.results[0].customString6Nav.externalName_en_US;   
                                }
                            }
                          
                            
                             console.warn("sDepartmentNav",sDepartmentNav)
                            if(userRole === "MSS"){
                                let userPermission = await that.getPermission(userId, oData.results[i].userId);
                                if(userPermission === true) {
                                    aUserDatas.push({
                                        user: oData.results[i].userId,
                                        firstName: oData.results[i].firstName,
                                        lastName : oData.results[i].lastName,
                                        custom08: this.removeCode(oData.results[i].custom08),
                                        custom11: this.onChangeMainListLabel(oData.results[i].custom11Nav),
                                        custom12: sCustom12,
                                        custom02: sCustom02,
                                        status: oData.results[i].status,
                                        department: sDepartmentNav,
                                        // division: this.removeCode(oData.results[i].division),
                                        personIdExternal :  oData.results[i].personKeyNav.personIdExternal
                                    });
                                }		
                            } else {
                                aUserDatas.push({
                                    user: oData.results[i].userId,
                                    firstName: oData.results[i].firstName,
                                    lastName : oData.results[i].lastName,
                                    custom08: this.removeCode(oData.results[i].custom08),
                                    custom11: this.onChangeMainListLabel(oData.results[i].custom11Nav),
                                    custom12: sCustom12,
                                    custom02: sCustom02,
                                    status: oData.results[i].status,
                                    department: sDepartmentNav,
                                    // division: this.removeCode(oData.results[i].division),
                                    personIdExternal :  oData.results[i].personKeyNav.personIdExternal
                                });
                            }
                                    
                        }
                        
                        oSelectedStatTBAR.setVisible(true);
                        oLTotal.setText("Total: "+oData.results.length.toString());
                        oDialogModel.setProperty("/userData", aUserDatas);
                        this.busyDialog.close();
                        })();                                
					} else {
                        oSelectedStatTBAR.setVisible(false);
                         oDialogModel.setProperty("/userData", aUserDatas);
					this.busyDialog.close();
                    }
                 
                   
				},
				error: (oError) => {
					MessageToast.show("사원 조회 시 에러 발생 : 담당자에게 문의해주세요.");
					this.busyDialog.close();
				}
			});
        },

        getPermission: function(UID ,TargetID) {           
			return new Promise((resolve, reject) => {
                let oModel = this.getOwnerComponent().getModel("SFModel");
                let oViewModel = this.getView().getModel();            
                let sReadString = "accessUserId="+"'"+UID+"'"+"&targetUserId="+"'"+TargetID+"'"+"&permType='DATA_MODEL'&permStringValue='$_userId_read'&permLongValue=-1L";
                oModel.read("/checkUserPermission", {					
                    urlParameters: sReadString,
					success: (oData, response) => {
                        let returnData = null;
                        // console.warn("oData",oData.checkUserPermission)
						if (oData && oData.checkUserPermission) {
                            returnData = oData.checkUserPermission;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
        },
        
		//------------------------------------------------- 사원검색 END----------------------------------------------------------------------->


		//<------------------------------------------------ GET DATA START----------------------------------------------------------------------
		// user: userID를 받아 SF에서 데이터를 가져온다 
		
		/**
		 * 사진정보 가져오기 
		 */ 
		getPhoto: function (user, sOriginGender) {
			return new Promise((resolve, reject) => {
				let sPhotoPath = jQuery.sap.getModulePath("solus.empinfocard") + "/image/" + "Male.jpg";
				if (sOriginGender === "F") sPhotoPath = jQuery.sap.getModulePath("solus.empinfocard") + "/image/" + "Female.jpg";
				
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("userId", "EQ", user),
						new sap.ui.model.Filter("photoType", "EQ", "20")
					],
					and: true
				});
				oModel.read("/Photo", {
					filters: [InputFilter],
					urlParameters: `$select=photo,photoId,photoName&$format=json`,
					success: (oData, response) => {
						if (oData && oData.results && oData.results.length) {
							sPhotoPath = "data:image/bmp;base64," + oData.results[0].photo;
						}
						resolve(sPhotoPath);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},

		/**
		 * 사용자 데이터 가져오기
		 */
		getUser: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
                let oViewModel = this.getView().getModel();
                const userLang = navigator.language || navigator.userLanguage;
                let sLang = userLang.split("-")[0]
                let BaseFilter = new sap.ui.model.Filter({     //고정필터
                    filters: [
                        new sap.ui.model.Filter("status", "EQ", 'f'),
                        new sap.ui.model.Filter("status", "EQ", 't'),
                    ],
                    and: false
                });
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("empInfo/isContingentWorker", "EQ", false),
						// new sap.ui.model.Filter("empInfo/empGlobalAssignmentNav", "EQ",  null),
						new sap.ui.model.Filter("personKeyNav/personIdExternal", "EQ", user)
					],
					and: true
				});
				oModel.read("/User", {
					filters: [BaseFilter,InputFilter],
					urlParameters: `$select=empInfo/jobInfoNav/departmentNav/name_ko_KR,empInfo/jobInfoNav/departmentNav/name_en_US,empInfo/jobInfoNav/departmentNav/name_zh_CN,empInfo/jobInfoNav/customString6Nav/externalName_ko_KR,empInfo/jobInfoNav/customString6Nav/externalName_en_US,empInfo/jobInfoNav/customString6Nav/externalName_zh_CN,empInfo/jobInfoNav/customString7Nav/externalName_ko_KR,empInfo/jobInfoNav/customString7Nav/externalName_en_US,empInfo/jobInfoNav/customString7Nav/externalName_zh_CN,personKeyNav/personIdExternal,firstName,lastName,homePhone,cellPhone,businessPhone,state,addressLine1,addressLine2,
					addressLine3,custom13,custom14,status,jobCode,custom08,department,custom01,custom10,custom12,status,custom03,hireDate,
					origHireDate,dateOfBirth,gender,custom02,custom01Nav/picklistLabels,custom11Nav/picklistLabels,custom10Nav/picklistLabels
					&$expand=empInfo/jobInfoNav/customString6Nav,empInfo/jobInfoNav/customString7Nav,empInfo/jobInfoNav/departmentNav,personKeyNav,empInfo,custom01Nav/picklistLabels,custom11Nav/picklistLabels,
					custom10Nav/picklistLabels&$format=json`,
					success: (oData, response) => {
						let returnData = null;
						if (oData && oData.results && oData.results.length) {
                            let sCustom12 = "";
                            let sDepartmentNav = "";
                            let sCustom02 = "";
                            if(oData.results[0].empInfo.jobInfoNav.results[0].customString7Nav) {
                                if(sLang === "ko") {
                                    sCustom12 = oData.results[0].empInfo.jobInfoNav.results[0].customString7Nav.externalName_ko_KR;
                                } else if(sLang === "zh") {
                                    sCustom12 = oData.results[0].empInfo.jobInfoNav.results[0].customString7Nav.externalName_zh_CN;
                                } else {
                                    sCustom12 = oData.results[0].empInfo.jobInfoNav.results[0].customString7Nav.externalName_en_US;   
                                }
                                if(sCustom12 === "" || sCustom12 === null) {
                                    sCustom12 = oData.results[0].empInfo.jobInfoNav.results[0].customString7Nav.externalName_en_US;   
                                }
                            }
                            oData.results[0].custom12 = sCustom12;
                            if(oData.results[0].empInfo.jobInfoNav.results[0].departmentNav) {
                                if(sLang === "ko") {
                                    sDepartmentNav = oData.results[0].empInfo.jobInfoNav.results[0].departmentNav.name_ko_KR;
                                } else if(sLang === "zh") {
                                    sDepartmentNav = oData.results[0].empInfo.jobInfoNav.results[0].departmentNav.name_zh_CN;
                                } else {
                                    sDepartmentNav = oData.results[0].empInfo.jobInfoNav.results[0].departmentNav.name_en_US;   
                                }
                                if(sDepartmentNav === "" || sDepartmentNav === null) {
                                    sDepartmentNav = oData.results[0].empInfo.jobInfoNav.results[0].departmentNav.name_en_US;   
                                }
                            }
                            oData.results[0].department = sDepartmentNav;
                            if(oData.results[0].empInfo.jobInfoNav.results[0].customString6Nav) {
                                if(sLang === "ko") {
                                    sCustom02 = oData.results[0].empInfo.jobInfoNav.results[0].customString6Nav.externalName_ko_KR;
                                } else if(sLang === "zh") {
                                    sCustom02 = oData.results[0].empInfo.jobInfoNav.results[0].customString6Nav.externalName_zh_CN;
                                } else {
                                    sCustom02 = oData.results[0].empInfo.jobInfoNav.results[0].customString6Nav.externalName_en_US;   
                                }
                                if(sCustom02 === "" || sCustom02 === null) {
                                    sCustom02 = oData.results[0].empInfo.jobInfoNav.results[0].customString6Nav.externalName_en_US;   
                                }
                            }
                            oData.results[0]["Custom02"] = sCustom02;
							returnData = oData.results[0];
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},

		/**
		 * 학력
		 */
		getEducation: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
                let oViewModel = this.getView().getModel();
                let BaseFilter = new sap.ui.model.Filter({     //고정필터
                    filters: [
                        new sap.ui.model.Filter("externalCodeNav/status", "EQ", 'f'),
                        new sap.ui.model.Filter("externalCodeNav/status", "EQ", 't'),
                    ],
                    and: false
                });
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("externalCodeNav/personKeyNav/personIdExternal", "EQ", user)
					],
					and: true
				});
				oModel.read("/cust_Education_Emp", {
					filters: [BaseFilter,InputFilter],
					urlParameters: `$format=json&$select=externalCodeNav/personKeyNav/personIdExternal,cust_Education/cust_EndDate,cust_Education/cust_Institute/externalName_ko_KR,
					cust_Education/startDate,cust_Education/cust_country,cust_Education/cust_major,cust_Education/cust_submajor,
					cust_Education/cust_Institute/externalName,cust_Education/cust_Certificate,cust_Education/cust_CertificateNav,
					cust_Education,cust_Education/cust_Institute,cust_Education/cust_Institute/cust_countryNav,cust_Education/cust_majorNav,
					cust_Education/cust_submajorNav,cust_Education/cust_Institute_TEXT&$expand=externalCodeNav/personKeyNav,cust_Education,cust_Education/cust_Institute,
					cust_Education/cust_CertificateNav,cust_Education/cust_Institute/cust_countryNav,
					cust_Education/cust_majorNav,cust_Education/cust_submajorNav`,
					success: (oData, response) => {
						let returnData = null;
						if (oData && oData.results && oData.results.length) {
							if (oData.results[0].cust_Education && oData.results[0].cust_Education.results && oData.results[0].cust_Education.results.length) {
								returnData = oData.results[0].cust_Education.results;
							}
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},

		/**
		 * 경력사항
		 */
		getEmployeeClass: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("externalCodeNav/personKeyNav/personIdExternal", "EQ", user)
					],
					and: true
				});
				oModel.read("/cust_PreviousEmployment_EMP", {
					filters: [InputFilter],
					urlParameters: `$format=json&$select=externalCodeNav/personKeyNav/personIdExternal,cust_toPreviousEmployment/startDate,cust_toPreviousEmployment/endDate,
					cust_toPreviousEmployment/cust_positionGroup,cust_toPreviousEmployment/cust_department,cust_toPreviousEmployment/cust_employer,
					cust_toPreviousEmployment/cust_jobCode,cust_toPreviousEmployment/cust_jobCodeNav/name_localized&$expand=externalCodeNav/personKeyNav,cust_toPreviousEmployment,cust_toPreviousEmployment/cust_jobCodeNav,externalCodeNav/personKeyNav`,
					success: (oData, response) => {
						let returnData = null;
						if (oData && oData.results && oData.results.length) {
							returnData = oData.results[0].cust_toPreviousEmployment.results;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},
        
    
		/**
		 * 가족사항
		 */
		getFamilyInfo: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("personNav/personIdExternal", "EQ", user)
					],
					and: true
				});
				oModel.read("/PerPersonRelationship", {
					filters: [InputFilter],
					urlParameters: `$format=json&$select=relationshipTypeNav/localeLabel,firstName,lastName,relPersonalNav/gender,relPersonNav/dateOfBirth,
					relationshipTypeNav/picklistLabels/label,relationshipTypeNav/picklistLabels/locale&$expand=relationshipTypeNav, personNav, relPersonalNav, 
					relPersonNav,relationshipTypeNav/picklistLabels`,
					success: (oData, response) => {
						let returnData = null;
						if (oData && oData.results && oData.results.length) {
							returnData = oData.results;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},
		
		/**
		 * 발령이력(2019.10.01 이전)
		 */
		getEmpJobOLD: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("userIdNav/personKeyNav/personIdExternal", "EQ", user)
					],
					and: true
				});
				oModel.read("/Background_InsideWorkExperience", {
					filters: [InputFilter],
					urlParameters: `fromDate=1900-01-01&$format=json&$select=actionDate,orgUnit,company,title,employeeGroupNav/picklistLabels,jobGroupNav/picklistLabels,reasonNav/picklistLabels&
					$expand=employeeGroupNav/picklistLabels,jobGroupNav/picklistLabels,reasonNav/picklistLabels,userIdNav/personKeyNav`,
					success: (oData, response) => {
                        let returnData = null;
						if (oData && oData.results && oData.results.length) {
							returnData = oData.results;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},

		/**
		 * 발령이력(한국어)
		 */
		getEmpJobKR: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("employmentNav/personIdExternal", "EQ", user),
                        new sap.ui.model.Filter("eventReasonNav/implicitPositionActionNav", "EQ", null)
					],
					and: true
				});
				oModel.read("/EmpJob", {
					filters: [InputFilter],
					urlParameters: `$format=json&$expand=eventReasonNav/nameTranslationNav,companyNav,customString6Nav,customString7Nav,jobCodeNav,employeeClassNav/picklistLabels,departmentNav,
					customString2Nav/picklistLabels&$select=startDate,companyNav/name_ko_KR,eventReasonNav/nameTranslationNav/value_ko_KR,departmentNav/name_ko_KR,customString7Nav/externalName_ko_KR,
					customString6Nav/externalName_ko_KR,jobCodeNav/name_ko_KR,employeeClassNav/picklistLabels , customString2Nav/picklistLabels&fromDate=1900-01-01`,
					success: (oData, response) => {
                        let returnData = null;
						if (oData && oData.results && oData.results.length) {
							returnData = oData.results;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},
		
		/**
		 * 발령이력(중국어)
		 */
		getEmpJobCN: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
                        new sap.ui.model.Filter("employmentNav/personIdExternal", "EQ", user),
                        new sap.ui.model.Filter("eventReasonNav/implicitPositionActionNav", "EQ", null)
					],
					and: true
				});
				oModel.read("/EmpJob", {
					filters: [InputFilter],
					urlParameters: `fromDate=1900-01-01&$format=json&$select=startDate,companyNav/name_zh_CN,eventReasonNav/nameTranslationNav/value_zh_CN,departmentNav/name_zh_CN,
					customString7Nav/externalName_zh_CN,customString6Nav/externalName_zh_CN,jobCodeNav/name_zh_CN,employeeClassNav/picklistLabels,customString2Nav/picklistLabels&
					$expand=eventReasonNav/nameTranslationNav,companyNav,customString6Nav,customString7Nav,jobCodeNav,employeeClassNav/picklistLabels,departmentNav,customString2Nav/picklistLabels`,
					success: (oData, response) => {
                        let returnData = null;
						if (oData && oData.results && oData.results.length) {
							returnData = oData.results;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
		},
		
		/**
		 * 발령이력(영어)
		 */
		getEmpJobUS: function (user) {
			return new Promise((resolve, reject) => {
				let oModel = this.getOwnerComponent().getModel("SFModel");
				let oViewModel = this.getView().getModel();
				let InputFilter = new sap.ui.model.Filter({
					filters: [
						new sap.ui.model.Filter("employmentNav/personIdExternal", "EQ", user),
                        new sap.ui.model.Filter("eventReasonNav/implicitPositionActionNav", "EQ", null)
					],
					and: true
				});
				oModel.read("/EmpJob", {
					filters: [InputFilter],
					urlParameters: `fromDate=1900-01-01&$format=json&$select=startDate,companyNav/name_en_US,eventReasonNav/nameTranslationNav/value_en_US,departmentNav/name_en_US,
					customString7Nav/externalName_en_US,customString6Nav/externalName_en_US,jobCodeNav/name_en_US,employeeClassNav/picklistLabels,customString2Nav/picklistLabels&
					$expand=eventReasonNav/nameTranslationNav,companyNav,customString6Nav,customString7Nav,jobCodeNav,employeeClassNav/picklistLabels,departmentNav,customString2Nav/picklistLabels`,
					success: (oData, response) => {
                        let returnData = null;    
						if (oData && oData.results && oData.results.length) {
							returnData = oData.results;
						}
						resolve(returnData);
					},
					error: (oError) => {
						reject(oError);
					}
				});
			});
        },
        

		
		//------------------------------------------------------GET DATA END------------------------------------------------------------------>
		
		//<------------------------------------------------ Utills Start-----------------------------------------------------------------------
		
		/**
		 * 카드상단 이미지 우측 리스트정보 추출
		 * oData : 리스트 정보
		 */ 
		onChangeMainListLabel: function(oData) {
			const userLang = navigator.language || navigator.userLanguage;
            let sRetunLabel = "";
            let sNoLabel = "";
			if (oData && oData.picklistLabels && oData.picklistLabels.results && oData.picklistLabels.results.length) {
				let aLabelDatas = oData.picklistLabels.results;
				for(let i=0; i<aLabelDatas.length; i++){

                    if(aLabelDatas[i].locale.split("_")[0] === "en"){
						sNoLabel = aLabelDatas[i].label;
					}
					if(aLabelDatas[i].locale.split("_")[0] === userLang.split("-")[0]){
						sRetunLabel = aLabelDatas[i].label;
					}
				}
            }
            if(!sRetunLabel) sRetunLabel  = sNoLabel;
			return sRetunLabel;
        },
        
		
		/**
		 * Locale에따른 라벨정보 추출
		 * aDatas : 라벨정보
		 */ 
		getLocaleLabel: function(aDatas){
            let userLang = navigator.language || navigator.userLanguage;
			let sLocale = "";
			let sLabel = "";
			if(aDatas && aDatas.length) {
				switch (userLang) {
					case 'en':
						sLocale = "en_US";
                        break;
                    case 'en-US':
						sLocale = "en_US";
						break;
					case 'zh':
						sLocale = "zh_CN";
                        break;
                    case 'zh-CN':
						sLocale = "zh_CN";
						break;
					default:
						sLocale = "ko_KR";
						break;
                }
                
				for(let i=0; i<aDatas.length; i++) {
					if(aDatas[i].locale === sLocale) {
						sLabel =  aDatas[i].label;
					}
				}
			}
			return sLabel;
		},
		
		/**
		 * Locale에따른 성별
		 * sGender : 성별코드
		 */ 
		checkGender: function (sGender) {
			if(!sGender || sGender === "") return "";
			let userLang = navigator.language || navigator.userLanguage;
			let vGender = "";
			if (sGender === "F") {
				switch (userLang) {
				case 'en':
					vGender = "Female";
                    break;
                case 'en-US':
					vGender = "Female";
					break;
				case 'zh':
					vGender = "女";
                    break;
                case 'zh-CN':
					vGender = "女";
					break;
				default:
					vGender = "여";
					break;
				}
			} else {
				switch (userLang) {
				case 'en':
					vGender = "Male";
                    break;
                case 'en-US':
					vGender = "Male";
					break;
				case 'zh':
					vGender = "男";
                    break;
                case 'zh-CN':
					vGender = "男";
					break;    
				default:
					vGender = "남";
					break;
				}
			}
			return vGender;
		},
		
		/**
		 * Locale에따른 재직상태정보
		 * sStat : 재직상태코드
		 */ 
		onChangeInfoStatus: function (sStat) {
			if(!sStat || sStat === "" ) return "";
			let userLang = navigator.language || navigator.userLanguage;
			let sReturnTxt = "";
			if (sStat === "t") {
				switch (userLang) {
				case 'en':
					sReturnTxt = "Active";
                    break;
                case 'en-US':
					sReturnTxt = "Active";
					break;
				case 'zh':
					sReturnTxt = "在职";
                    break;
                case 'zh-CN':
					sReturnTxt = "在职";
					break;
				default:
					sReturnTxt = "재직";
					break;
				}
			} else {
				switch (userLang) {
				case 'en':
					sReturnTxt = "Inactive";
                    break;
                case 'en-US':
					sReturnTxt = "Inactive";
					break;
				case 'zh':
					sReturnTxt = "离职";
                    break;
                case 'zh-CN':
					sReturnTxt = "离职";
					break;
				default:
					sReturnTxt = "퇴직";
					break;
				}
			}
			return sReturnTxt;
		},

		/**
		 * 날자차이 , 나이계산
		 * fromDay : 시작일
		 * type : (Age:나이 , Date: 날자)
		 */
		checkElapsedDay: function (fromDay, type) {
			if(!fromDay || fromDay === "" ) return "";
			let vFromDay = "";
			if (type === "Date") {
				vFromDay = new Date(fromDay);
			} else {
				vFromDay = fromDay;
			}
			let toDay = new Date();
			let elapsed = toDay.getTime() - vFromDay.getTime();
			let elapsedDay = elapsed / 1000 / 60 / 60 / 24; // 두날짜의 차이 일수 
			let year = "";
			let month = "";
			let day = "";
			let sReturnTxt = "";
			let userLang = navigator.language || navigator.userLanguage;
			if (type === "Age") {
				year = Math.floor(elapsedDay / 365);
				month = Math.floor((elapsedDay - (year * 365)) / 30)
				if (userLang === "ko-KR" || userLang === "ko") {
					sReturnTxt = year + '세';
				} else {
					sReturnTxt = year;
				}
				return sReturnTxt;
			}
			if (elapsedDay < 30) {
				day = Math.round(elapsedDay);
				if (userLang === "ko-KR" || userLang === "ko") {
					sReturnTxt = day + '일';
				} else {
					sReturnTxt = day + 'Day';
				}
				return sReturnTxt;
			} else if (elapsedDay < 365) {
				month = Math.floor(elapsedDay / 30);
				if (userLang === "ko-KR" || userLang === "ko") {
					sReturnTxt = month + '개월';
				} else {
					sReturnTxt = month + 'Month';
				}
				return sReturnTxt;
			} else {
				year = Math.floor(elapsedDay / 365);
				month = Math.floor((elapsedDay - (year * 365)) / 30)
				if (userLang === "ko-KR" || userLang === "ko") {
					sReturnTxt = year + '년 ' + month + '개월';
				} else {
					sReturnTxt = year + 'Year ' + month + 'Month';
				}
				return sReturnTxt;
			}
		},

		/**
		 * JSon Date 변환
		 * date : 날짜정보
		 */
		getMultiDateTime: function (date) {
			if(!date || date === "" ) return "";
			let value = date;
			let formatted = "";
			formatted = value.getFullYear() + "-" +
				("0" + (value.getMonth() + 1)).slice(-2) + "-" +
				("0" + value.getDate()).slice(-2);
			return formatted;
		},

		/**
		 * 마지막 괄호 삭제 : 마지막 괄호가 코드가 있다는 전재 
		 */
		removeCode: function (code) {
			let changecode = null;
			if (code != null && code != "") {
				if (code.lastIndexOf("(") >= 0) {
					changecode = code.substring(0, code.lastIndexOf("("));
					if (code.lastIndexOf(")") >= 0) {
						if ((code.lastIndexOf(")") + 1) != code.length && code.lastIndexOf("(") < code.lastIndexOf(")"))
							changecode += code.substring(code.lastIndexOf(")") + 1, code.length);
					}
				} else {
					changecode = code;
				}
			}
			return changecode;
		},
		
		getParameter: function () {
			let url = location.search; // 주소 ? 다음부터 나옴
			let qs = url.substring(url.indexOf('?') + 1).split('&');
			for (let i = 0, result = {}; i < qs.length; i++) {
				qs[i] = qs[i].split('=');
				result[qs[i][0]] = decodeURIComponent(qs[i][1]);
			}
			return result;
		}
		//------------------------------------------------- Utills END------------------------------------------------------------------------->
	
	});
});