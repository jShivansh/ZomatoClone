(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shiva\Documents\Coding\Practice\ZomatoClone\src\main.ts */"zUnb");


/***/ }),

/***/ "7+Ay":
/*!*****************************************************!*\
  !*** ./src/app/core/services/user-login.service.ts ***!
  \*****************************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserLoginService {
    constructor() {
        this.userLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.userLoggedIn$ = this.userLoggedInSubject.asObservable();
        this.userNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.userName$ = this.userNameSubject.asObservable();
    }
    loginUser(userName) {
        this.userNameSubject.next(userName);
        this.userLoggedInSubject.next(true);
    }
    logoutUser() {
        this.userNameSubject.next('');
        this.userLoggedInSubject.next(false);
    }
}
UserLoginService.ɵfac = function UserLoginService_Factory(t) { return new (t || UserLoginService)(); };
UserLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserLoginService, factory: UserLoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7pSQ":
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CartService {
    //$ signify observable stream of data. cartItem declared as Observable of any type. It is initialized with cartItemSubject using asObservable() 
    constructor() {
        this.counter = 0;
        this.cartItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        //Declared cartItemsubject as BehaviouSubject of array of any. new initializeses BehaviourSubject with value as empty array[].
        this.cartItem$ = this.cartItemSubject.asObservable();
    }
    addToCart(item) {
        const currentItem = this.cartItemSubject.getValue();
        // console.log(item.id);
        currentItem.forEach((data) => {
            if (item.id === data.id) {
                data.quantity++;
                this.counter++;
            }
        });
        if (this.counter > 0) {
            this.cartItemSubject.next(currentItem);
        }
        else {
            const updatedItem = [...currentItem, item];
            // console.log(updatedItem);
            this.cartItemSubject.next(updatedItem);
        }
        // const updatedItem = [...currentItem, item];
        // console.log(updatedItem);
        // this.cartItemSubject.next(updatedItem);
    }
    emptyCart() {
        this.cartItemSubject.next([]); // Set the cart item subject to an empty array
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CKr9":
/*!**************************************************************!*\
  !*** ./src/app/features/components/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class AboutComponent {
    constructor(titleService) {
        this.titleService = titleService;
        titleService.setTitle('ZomatoClone | About');
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 13, vars: 0, consts: [[1, "section1"], ["src", "https://static.vecteezy.com/system/resources/previews/023/029/286/large_2x/set-of-american-breakfast-food-with-aesthetic-arrangement-top-view-photo.jpg", "alt", ""], [1, "center"], [1, "section2"], [1, "whoAreWe"], [1, "whoAreWeContent"], [1, "whoAreWeImg"], ["src", "https://pbs.twimg.com/media/E9CY6A7XsAkFw6V.jpg", "alt", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Where Every Dish Tells a Story: A Culinary Journey of Flavor and Passion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Who are we?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome to our platform, where satisfaction meets simplicity! We're a clone of a renowned food ordering system, offering a hassle-free experience from selection to checkout. Browse our diverse menu, add items to your cart with ease, and manipulate quantities to your liking. When you're ready, our intuitive interface guides you through a seamless checkout process, directing you to a dummy payment gateway for secure transactions. Join us for a culinary journey that's as convenient as it is delicious! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".section1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  height: 100vh;\r\n  opacity: 0.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: large;\r\n  font-weight: bold;\r\n  color: rgb(71, 34, 34);\r\n}\r\n\r\n.section2[_ngcontent-%COMP%]{\r\n  margin: 3em;\r\n}\r\n\r\n.section2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-weight: bolder;\r\n  font-size: xx-large;\r\n}\r\n\r\n.whoAreWe[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.whoAreWeContent[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin: 2em;\r\n}\r\n\r\n.whoAreWeImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 20em;\r\n  margin-left: 5em;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .center[_ngcontent-%COMP%]{\r\n    \r\n  }\r\n\r\n  img[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n  }\r\n  .whoAreWe[_ngcontent-%COMP%]{\r\n    flex-wrap: wrap;\r\n    \r\n  }\r\n  .whoAreWeContent[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 1em;\r\n  }\r\n  .whoAreWeImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 20em;\r\n    margin-left: 1em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbjEgaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoNzEsIDM0LCAzNCk7XHJcbn1cclxuXHJcbi5zZWN0aW9uMntcclxuICBtYXJnaW46IDNlbTtcclxufVxyXG5cclxuLnNlY3Rpb24yIGgxe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLndob0FyZVdle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi53aG9BcmVXZUNvbnRlbnR7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDJlbTtcclxufVxyXG5cclxuLndob0FyZVdlSW1nIGltZ3tcclxuICBoZWlnaHQ6IDIwZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDVlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNlbnRlcntcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgfVxyXG5cclxuICBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAud2hvQXJlV2V7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIH1cclxuICAud2hvQXJlV2VDb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICB9XHJcbiAgLndob0FyZVdlSW1nIGltZ3tcclxuICAgIGhlaWdodDogMjBlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "Di/X":
/*!****************************************************************************!*\
  !*** ./src/app/features/components/user-details/user-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cart.service */ "7pSQ");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function UserDetailsComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailsComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.pay(ctx_r2.grandTotalPromo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pay Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserDetailsComponent {
    constructor(router, cartService, titleService) {
        this.router = router;
        this.cartService = cartService;
        this.titleService = titleService;
        this.cartItems = [];
        this.grandTotalPrice = 0;
        this.promoCode = '';
        this.fullName = '';
        this.address = '';
        this.formData = [];
        this.checker = 0;
        this.isDisable = true;
        // ------------------------------
        this.handler = null;
        titleService.setTitle('ZomatoClone | Order Summary');
    }
    ngOnInit() {
        this.cartService.cartItem$.subscribe(item => {
            this.cartItems = item;
        });
    }
    submitForm() {
        const newData = {
            fullName: this.fullName,
            phoneNumber: this.phoneNumber,
            address: this.address
        };
        this.formData.push(newData);
        // Clear form fields after submitting
        // this.fullName = '';
        // this.phoneNumber = null ;
        // this.address = '';
        console.log(`Name:${this.formData[0].fullName}; Phone number: ${this.formData[0].phoneNumber}`);
    }
    grandTotal() {
        let totalPrice = 0;
        for (const item of this.cartItems) {
            totalPrice += item.quantity * item.price;
        }
        return totalPrice;
    }
    grandTotalPromo() {
        let totalPrice = 0;
        for (const item of this.cartItems) {
            totalPrice += item.quantity * item.price;
        }
        if (this.promoCode === 'CODE10') {
            return (totalPrice + totalPrice * 18 / 100) * 9 / 10;
        }
        if (this.promoCode === 'CODE20') {
            return (totalPrice + totalPrice * 18 / 100) * 4 / 5;
        }
        if (this.promoCode === 'CODE25') {
            return (totalPrice + totalPrice * 18 / 100) * 3 / 4;
        }
        else
            return (totalPrice + totalPrice * 18 / 100);
    }
    submitCheck() {
        setTimeout(() => this.checker++, 1000);
    }
    paymentCheck() {
        this.checker = 0;
        this.fullName = '';
        this.phoneNumber = null;
        this.address = '';
    }
    pay(amount) {
        const totalAmount = Number(this.grandTotalPromo().toFixed(2));
        if (this.cartItems.length == 0) {
            alert("Please add items to the cart first");
            return;
        }
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_51OuYpvSDsWvFKZl6QcAj4JeTWpDUVspEXBCe50RYZolfJ4C5gHHksOeMpkfeOsswJ2quxwU6iL0So9zPHNK2n82W00HIrog03X',
            locale: 'auto',
            token: (token) => {
                console.log(token);
                this.router.navigate(['/payments']);
            }
        });
        handler.open({
            name: this.fullName,
            description: `Amout to be paid is ₹${totalAmount}`,
            // amount: (totalAmount+(totalAmount*18/100)) * 100
            amout: amount
        });
    }
    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
                this.handler = window.StripeCheckout.configure({
                    key: 'pk_test_51OuYpvSDsWvFKZl6QcAj4JeTWpDUVspEXBCe50RYZolfJ4C5gHHksOeMpkfeOsswJ2quxwU6iL0So9zPHNK2n82W00HIrog03X',
                    locale: 'auto',
                    token: function (token) {
                        // You can access the token ID with `token.id`.
                        // Get the token ID to your server-side code for use.
                        console.log(token);
                        alert('Payment Success!!');
                    }
                });
            };
            window.document.body.appendChild(s);
        }
    }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["app-user-details"]], decls: 44, vars: 18, consts: [[1, "container"], [1, "form-container"], [1, "userForm", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["matInput", "", "placeholder", "Full Name", "name", "fullName", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Phone Number", "name", "phoneNumber", "required", "", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Address", "name", "address", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-group-btn"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], [1, "orderSummary"], [1, "grandTotalDiv"], ["matInput", "", "placeholder", "Promo Code", "name", "promoCode", 3, "ngModel", "ngModelChange"], [1, "payNowBtn"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "click"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please enter your details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserDetailsComponent_Template_form_ngSubmit_4_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailsComponent_Template_textarea_ngModelChange_13_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailsComponent_Template_button_click_16_listener() { return ctx.submitCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sub Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Taxes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDetailsComponent_Template_input_ngModelChange_35_listener($event) { return ctx.promoCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Grand Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserDetailsComponent_button_43_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 9, ctx.grandTotal(), "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 12, ctx.grandTotal() * 18 / 100, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.promoCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 15, ctx.grandTotalPromo(), "INR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checker > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height:100%;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n  padding: 1em;\r\n  border: 2px solid black;\r\n  height: auto;\r\n  \r\n  width: auto;\r\n  \r\n  background-color: rgb(228, 234, 240);\r\n  margin: 2em;\r\n  border-radius: 10%;\r\n  min-height: 60vh;\r\n  min-width: 50vh;\r\n}\r\n\r\n.userForm[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.form-group-btn[_ngcontent-%COMP%]{\r\n  margin-top: 3em;\r\n}\r\n\r\n.orderSummary[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n    border: 2px solid black;\r\n    height: auto;\r\n    \r\n    width: auto;\r\n    \r\n    background-color: antiquewhite;\r\n    margin: 2em;\r\n    border-radius: 10%;\r\n    min-height: 60vh;\r\n    min-width: 50vh;\r\n  }\r\n\r\n.grandTotalDiv[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n.payNowBtn[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    margin-top: 3em;\r\n  }\r\n\r\n@media screen and (max-width: 1250px) {\r\n    \r\n    .form-container[_ngcontent-%COMP%], .orderSummary[_ngcontent-%COMP%]{\r\n      min-height: 40%;\r\n      min-width: 70%;\r\n    }\r\n \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVFO0lBQ0UsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFFQTs7SUFFRTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCOztFQUVGIiwiZmlsZSI6InVzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGhlaWdodDogYXV0bztcclxuICAvKiBtaW4taGVpZ2h0OiA1MHZoOyAqL1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIC8qIG1pbi13aWR0aDogNDB2aDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMzQsIDI0MCk7XHJcbiAgbWFyZ2luOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgbWluLXdpZHRoOiA1MHZoO1xyXG59XHJcblxyXG4udXNlckZvcm17XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLWJ0bntcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbn1cclxuICBcclxuICAub3JkZXJTdW1tYXJ5e1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvKiBtaW4taGVpZ2h0OiA1MHZoOyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICAvKiBtaW4td2lkdGg6IDUwdmg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgICBtaW4td2lkdGg6IDUwdmg7XHJcbiAgfVxyXG5cclxuICAuZ3JhbmRUb3RhbERpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucGF5Tm93QnRue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIGJvdHRvbTogMXB4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XHJcbiAgICBcclxuICAgIC5mb3JtLWNvbnRhaW5lciwgLm9yZGVyU3VtbWFyeXtcclxuICAgICAgbWluLWhlaWdodDogNDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIH1cclxuIFxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "GgTN":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/buy-popup/buy-popup.component.ts ***!
  \********************************************************************/
/*! exports provided: BuyPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPopupComponent", function() { return BuyPopupComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cart.service */ "7pSQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









class BuyPopupComponent {
    constructor(data, cartService) {
        this.data = data;
        this.cartService = cartService;
        this.quantity = 1;
    }
    ngOnInit() {
    }
    calculateTotalPrice() {
        const totalPrice = this.quantity * this.data.item.price;
        console.log(`You selected ${this.quantity} ${this.data.item.name} and total is ${totalPrice}`);
        this.cartService.addToCart(Object.assign(Object.assign({}, this.data.item), { quantity: this.quantity }));
    }
}
BuyPopupComponent.ɵfac = function BuyPopupComponent_Factory(t) { return new (t || BuyPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
BuyPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuyPopupComponent, selectors: [["app-buy-popup"]], decls: 19, vars: 10, consts: [[1, "popup"], ["mat-dialog-title", ""], ["appearance", "outline"], ["matInput", "", "type", "number", "id", "btn1", "min", "1", 3, "ngModel", "ngModelChange"], [1, "btn"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "accent", "mat-dialog-close", ""]], template: function BuyPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please select the quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyPopupComponent_Template_input_ngModelChange_6_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyPopupComponent_Template_button_click_15_listener() { return ctx.calculateTotalPrice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 4, ctx.data.item.price, "INR"), " X ", ctx.quantity, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 7, ctx.quantity * ctx.data.item.price, "INR"));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["span[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJidXktcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "I5Nq":
/*!****************************************************************************!*\
  !*** ./src/app/features/components/payment-page/payment-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageComponent", function() { return PaymentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/cart.service */ "7pSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





function PaymentPageComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function PaymentPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your Order is placed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaymentPageComponent {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.checker = 0;
    }
    ngOnInit() {
        setTimeout(() => {
            this.checker++;
            this.cartService.emptyCart();
            this.navigateToHome();
        }, 3000);
    }
    navigateToHome() {
        if (this.checker > 0) {
            setTimeout(() => {
                console.log("Its working");
                this.router.navigate(['']);
                this.checker = 0;
            }, 3000);
        }
    }
}
PaymentPageComponent.ɵfac = function PaymentPageComponent_Factory(t) { return new (t || PaymentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PaymentPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentPageComponent, selectors: [["app-payment-page"]], decls: 3, vars: 2, consts: [[1, "paymentPage"], [4, "ngIf"]], template: function PaymentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentPageComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentPageComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checker === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checker !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]], styles: [".paymentPage[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmIiwiZmlsZSI6InBheW1lbnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnRQYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ISYr":
/*!************************************************************************!*\
  !*** ./src/app/features/components/login-page/login-page.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user-login.service */ "7+Ay");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginPageComponent {
    constructor(titleService, authService, router) {
        this.titleService = titleService;
        this.authService = authService;
        this.router = router;
        this.signupUser = [];
        this.signupObj = {
            userName: '',
            email: '',
            password: ''
        };
        this.loginObj = {
            email: '',
            password: ''
        };
        titleService.setTitle('ZomatoClone | Login');
    }
    onSignUp() {
        if (this.signupObj.userName === '' || this.signupObj.email === '' || this.signupObj.password === '') {
            alert('Put some valid input');
        }
        else {
            const isUserExist = this.signupUser
                .find(user => user.email == this.signupObj.email
            // && user.password == this.loginObj.password
            );
            if (isUserExist == undefined) {
                this.signupUser.push(this.signupObj);
                console.log(this.signupUser);
                localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
                this.signupObj = {
                    userName: '',
                    email: '',
                    password: ''
                };
                alert('Signed up successfully!!!');
            }
            else
                alert('User already exist!!');
        }
    }
    onLogin() {
        if (this.loginObj.email === '' || this.loginObj.password === '') {
            alert('Put some valid input');
        }
        else {
            const isUserExist = this.signupUser
                .find(user => user.email == this.loginObj.email
                && user.password == this.loginObj.password);
            // console.log(isUserExist);
            if (isUserExist != undefined) {
                this.authService.loginUser(isUserExist.userName);
                alert("Welcome back");
                this.loginObj = {
                    email: '',
                    password: ''
                };
                this.router.navigate(['']);
            }
            else
                alert('Wrong credentials');
        }
    }
    //if refreshed need to load again in signupUser
    ngOnInit() {
        const localData = localStorage.getItem('signupUser');
        if (localData != null) {
            this.signupUser = JSON.parse(localData);
        }
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-loginPage"]], decls: 24, vars: 5, consts: [[1, "video-background"], ["autoplay", "", "loop", "", "muted", ""], ["src", "./assets/movie.mp4", "type", "video/mp4"], [1, "otherContent"], [1, "main"], ["type", "checkbox", "id", "chk", "aria-hidden", "true"], [1, "signup"], ["for", "chk", "aria-hidden", "true"], ["type", "text", "name", "txt", "placeholder", "Your name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pswd", "placeholder", "Password", "required", "", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "login"], ["type", "email", "name", "email", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pswd", "placeholder", "Password", 3, "ngModel", "ngModelChange"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_11_listener($event) { return ctx.signupObj.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.signupObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.signupObj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_14_listener() { return ctx.onSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_20_listener($event) { return ctx.loginObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_21_listener($event) { return ctx.loginObj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_22_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".video-background[_ngcontent-%COMP%] {\r\n    \r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw; \r\n    height: 89vh; \r\n    overflow: hidden;\r\n    z-index: -1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .video-background[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    object-fit: cover; \r\n    z-index: -1;\r\n    opacity: 40%;\r\n  }\r\n  \r\n  .otherContent[_ngcontent-%COMP%]{\r\n    position: relative; \r\n    z-index: 1;\r\n  }\r\n  \r\n  .main[_ngcontent-%COMP%]{\r\n\twidth: 350px;\r\n\theight: 500px;\r\n\t\r\n\toverflow: hidden;\r\n\t\r\n\tborder-radius: 10px;\r\n}\r\n  \r\n  .main[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 5px 20px 50px #000;\r\n}\r\n  \r\n  #chk[_ngcontent-%COMP%]{\r\n\tdisplay: none;\r\n}\r\n  \r\n  .signup[_ngcontent-%COMP%]{\r\n\tposition: relative;\r\n\twidth:100%;\r\n\theight: 100%;\r\n}\r\n  \r\n  label[_ngcontent-%COMP%]{\r\n\tcolor: #fff;\r\n\tfont-size: 2.3em;\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tmargin: 60px;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n\ttransition: .5s ease-in-out;\r\n}\r\n  \r\n  input[_ngcontent-%COMP%]{\r\n\twidth: 60%;\r\n\theight: 20px;\r\n\tbackground: #e0dede;\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tmargin: 20px auto;\r\n\tpadding: 10px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n}\r\n  \r\n  button[_ngcontent-%COMP%]{\r\n\twidth: 60%;\r\n\theight: 40px;\r\n\tmargin: 10px auto;\r\n\tjustify-content: center;\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\tbackground: #573b8a;\r\n\tfont-size: 1em;\r\n\tfont-weight: bold;\r\n\tmargin-top: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\ttransition: .2s ease-in;\r\n\tcursor: pointer;\r\n}\r\n  \r\n  button[_ngcontent-%COMP%]:hover{\r\n\tbackground: #6d44b8;\r\n}\r\n  \r\n  .login[_ngcontent-%COMP%]{\r\n\theight: 460px;\r\n\tbackground: #eee;\r\n\tborder-radius: 60% / 10%;\r\n\ttransform: translateY(-180px);\r\n\ttransition: .8s ease-in-out;\r\n}\r\n  \r\n  .login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\tcolor: #573b8a;\r\n\ttransform: scale(.6);\r\n}\r\n  \r\n  #chk[_ngcontent-%COMP%]:checked    ~ .login[_ngcontent-%COMP%]{\r\n\ttransform: translateY(-500px);\r\n}\r\n  \r\n  #chk[_ngcontent-%COMP%]:checked    ~ .login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\ttransform: scale(1);\t\r\n}\r\n  \r\n  #chk[_ngcontent-%COMP%]:checked    ~ .signup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\ttransform: scale(.6);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWSxFQUFFLG9DQUFvQztJQUNsRCxZQUFZLEVBQUUsc0NBQXNDO0lBQ3BELGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXLEVBQUUseUNBQXlDO0lBQ3RELFlBQVksRUFBRSx5Q0FBeUM7SUFDdkQsaUJBQWlCLEVBQUUsaURBQWlEO0lBQ3BFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVGO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLDZXQUE2VztDQUM3VyxtQkFBbUI7QUFDcEI7O0VBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7O0VBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0VBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7QUFDYjs7RUFDQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZiwyQkFBMkI7QUFDNUI7O0VBQ0E7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0VBQ0E7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7O0VBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7O0VBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4Qiw2QkFBNkI7Q0FDN0IsMkJBQTJCO0FBQzVCOztFQUNBO0NBQ0MsY0FBYztDQUNkLG9CQUFvQjtBQUNyQjs7RUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7RUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7RUFDQTtDQUNDLG9CQUFvQjtBQUNyQiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi52aWRlby1iYWNrZ3JvdW5kIHtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7IC8qIFNldCB3aWR0aCB0byAxMDAgdmlld3BvcnQgd2lkdGggKi9cclxuICAgIGhlaWdodDogODl2aDsgLyogU2V0IGhlaWdodCB0byAxMDAgdmlld3BvcnQgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAudmlkZW8tYmFja2dyb3VuZCB2aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEVuc3VyZSB0aGUgdmlkZW8gZmlsbHMgdGhlIGNvbnRhaW5lciAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBFbnN1cmUgdGhlIHZpZGVvIGZpbGxzIHRoZSBjb250YWluZXIgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBFbnN1cmUgdGhlIHZpZGVvIGNvdmVycyB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvcGFjaXR5OiA0MCU7XHJcbiAgfVxyXG5cclxuICAub3RoZXJDb250ZW50e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuLm1haW57XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdGhlaWdodDogNTAwcHg7XHJcblx0LyogYmFja2dyb3VuZDogcmVkOyAqL1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0LyogYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9kb2MtMDgtMmMtZG9jcy5nb29nbGV1c2VyY29udGVudC5jb20vZG9jcy9zZWN1cmVzYy82OGM5MHNtaWdsaWhuZzk1MzRtdnFtcTE5NDZkbWlzNS9mbzBwaWNzcDFuaGl1Y21jMGwyNXMyOXJlc3BncHI0ai8xNjMxNTI0Mjc1MDAwLzAzNTIyMzYwOTYwOTIyMjk4Mzc0LzAzNTIyMzYwOTYwOTIyMjk4Mzc0LzFTeDBqaGRwRXBuTkl5ZFM0cm5ONGtIU0p0VTFFeVdrYT9lPXZpZXcmYXV0aHVzZXI9MCZub25jZT1nY3JvY2VwZ2JiMTdtJnVzZXI9MDM1MjIzNjA5NjA5MjIyOTgzNzQmaGFzaD10ZmhnYnM4NmthNmRpdm8zbGxidnA5M21nNGNzdmIzOFwiKSBuby1yZXBlYXQgY2VudGVyLyBjb3ZlcjsgKi9cclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5tYWluOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA1cHggMjBweCA1MHB4ICMwMDA7XHJcbn1cclxuI2Noa3tcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaWdudXB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcbmxhYmVse1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMi4zZW07XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW46IDYwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxufVxyXG5pbnB1dHtcclxuXHR3aWR0aDogNjAlO1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZTBkZWRlO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0bWFyZ2luOiAyMHB4IGF1dG87XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdG1hcmdpbjogMTBweCBhdXRvO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM1NzNiOGE7XHJcblx0Zm9udC1zaXplOiAxZW07XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0dHJhbnNpdGlvbjogLjJzIGVhc2UtaW47XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kOiAjNmQ0NGI4O1xyXG59XHJcbi5sb2dpbntcclxuXHRoZWlnaHQ6IDQ2MHB4O1xyXG5cdGJhY2tncm91bmQ6ICNlZWU7XHJcblx0Ym9yZGVyLXJhZGl1czogNjAlIC8gMTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTgwcHgpO1xyXG5cdHRyYW5zaXRpb246IC44cyBlYXNlLWluLW91dDtcclxufVxyXG4ubG9naW4gbGFiZWx7XHJcblx0Y29sb3I6ICM1NzNiOGE7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSguNik7XHJcbn1cclxuXHJcbiNjaGs6Y2hlY2tlZCB+IC5sb2dpbntcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwMHB4KTtcclxufVxyXG4jY2hrOmNoZWNrZWQgfiAubG9naW4gbGFiZWx7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcdFxyXG59XHJcbiNjaGs6Y2hlY2tlZCB+IC5zaWdudXAgbGFiZWx7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSguNik7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "K+dn":
/*!************************************************************!*\
  !*** ./src/app/features/components/cart/cart.component.ts ***!
  \************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/cart.service */ "7pSQ");
/* harmony import */ var src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user-login.service */ "7+Ay");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function CartComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.decreaseQty(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.increaseQty(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_div_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteItem(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 6, item_r2.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 9, item_r2.price * item_r2.quantity, "INR"));
} }
function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_3_div_1_Template, 27, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.quantity > 0);
} }
function CartComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.chekcUserLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(cartService, authService, router) {
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
        this.cartItems = [];
        this.userLogin = false;
    }
    ngOnInit() {
        this.cartService.cartItem$.subscribe(item => {
            this.cartItems = item;
        });
        this.authService.userLoggedIn$.subscribe(logedIn => {
            this.userLogin = logedIn;
        });
    }
    calculateGrandTotal() {
        let grandTotal = 0;
        for (const item of this.cartItems) {
            grandTotal += item.price * item.quantity;
        }
        return grandTotal;
    }
    increaseQty(item) {
        item.quantity++;
    }
    decreaseQty(item) {
        if (item.quantity > 1) {
            item.quantity--;
        }
    }
    deleteItem(item) {
        const index = this.cartItems.findIndex((data) => data.id === item.id);
        this.cartItems.splice(index, 1);
    }
    chekcUserLogin() {
        if (this.userLogin) {
            this.router.navigate(['/userDetails']);
        }
        else
            this.router.navigate(['/login']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 12, vars: 7, consts: [[1, "popup-container"], [4, "ngFor", "ngForOf"], [1, "grandTotal"], [1, "btn"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "accent", "mat-dialog-close", ""], ["class", "items", 4, "ngIf"], [1, "items"], [1, "item-image"], [3, "src", "alt"], [1, "item-details"], [1, "quantityControl"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["type", "text", "disabled", "", 3, "value"], ["mat-icon-button", "", "color", "primary", 3, "click"], [1, "item-price"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartComponent_button_9_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your cart(", ctx.cartItems.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sub Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.calculateGrandTotal(), "INR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".popup-container[_ngcontent-%COMP%] {\r\n    max-height: 500px;\r\n    overflow: auto;\r\n}\r\n\r\n.grandTotal[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    margin-top: 1.5em;\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.grandTotal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-weight: 900;\r\n}\r\n\r\n.items[_ngcontent-%COMP%] {\r\n    margin: 0.5em;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    box-shadow: 0 4px 8px 0 #484544, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.item-image[_ngcontent-%COMP%]{\r\n    margin: 1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.item-details[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1em;\r\n    flex-wrap: wrap;\r\n    text-align: center;\r\n}\r\n\r\n.quantityControl[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n  border-radius: 10%;\r\n  text-align: center;\r\n}\r\n\r\n.item-price[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    margin: 1em;\r\n}\r\n\r\n.item-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin-top: 1.4em;\r\n}\r\n\r\n.item-price[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-weight: bolder;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 8em;\r\n    height: 5.5em;\r\n    border-radius: 10%;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    \r\n\r\n    .item-image[_ngcontent-%COMP%] {\r\n        display: none;\r\n      }\r\n    .quantityControl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFJQTtJQUNJLFVBQVU7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFJQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTs7T0FFRzs7SUFFSDtRQUNJLGFBQWE7TUFDZjtJQUNGO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cC1jb250YWluZXIge1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmdyYW5kVG90YWwge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbn1cclxuXHJcbi5ncmFuZFRvdGFsIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLml0ZW1zIHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzQ4NDU0NCwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5pdGVtLWltYWdle1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1kZXRhaWxze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucXVhbnRpdHlDb250cm9sIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuXHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pdGVtLXByaWNle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcbi5pdGVtLXByaWNlIGgze1xyXG4gICAgbWFyZ2luLXRvcDogMS40ZW07XHJcbn1cclxuXHJcbiAgICBcclxuXHJcbi5pdGVtLXByaWNlIGgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIGhlaWdodDogNS41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC8qIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9ICovXHJcblxyXG4gICAgLml0ZW0taW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIC5xdWFudGl0eUNvbnRyb2wgcHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "MSuk":
/*!****************************************************!*\
  !*** ./src/app/core/services/item-list.service.ts ***!
  \****************************************************/
/*! exports provided: ItemListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListService", function() { return ItemListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ItemListService {
    constructor(http) {
        this.http = http;
    }
    getItem() {
        return this.http.get("./assets/items.json");
    }
}
ItemListService.ɵfac = function ItemListService_Factory(t) { return new (t || ItemListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItemListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemListService, factory: ItemListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OOyK":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_features_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/components/cart/cart.component */ "K+dn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "7pSQ");
/* harmony import */ var src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user-login.service */ "7+Ay");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HeaderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function HeaderComponent_ng_template_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_8_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ng_template_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.toggleLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_ng_template_8_div_3_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showLogout);
} }
class HeaderComponent {
    constructor(dialog, cartService, authService) {
        this.dialog = dialog;
        this.cartService = cartService;
        this.authService = authService;
        this.cartItems = [];
        this.userLoggedIn = false;
        this.userName = '';
        this.showLogout = false;
    }
    opeCart() {
        this.dialog.open(src_app_features_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_0__["CartComponent"]);
    }
    ngOnInit() {
        this.cartService.cartItem$.subscribe(item => {
            this.cartItems = item;
        });
        //For user details
        this.authService.userLoggedIn$.subscribe(loggedIn => {
            this.userLoggedIn = loggedIn;
        });
        this.authService.userName$.subscribe(name => {
            this.userName = name;
        });
    }
    logout() {
        this.authService.logoutUser();
    }
    toggleLogout() {
        this.showLogout = !this.showLogout;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 3, consts: [[1, "header"], [1, "logo"], ["routerLink", "/"], [1, "actions"], ["routerLink", "/about"], [4, "ngIf", "ngIfElse"], ["loggedInUser", ""], [3, "click"], [1, "fa-solid", "fa-cart-shopping", "cartImg", "fa-lg"], ["id", "counter"], ["routerLink", "/login"], [1, "user-container"], ["class", "logout-btn", 4, "ngIf"], [1, "logout-btn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "zomato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_ng_container_7_Template, 3, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_ng_template_8_Template, 4, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() { return ctx.opeCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.userLoggedIn)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cartItems.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".header[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1em 2em;\r\n  max-height: 5vh;\r\n  background-color: rgb(246, 232, 227);\r\n  align-items: center;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  font-size: xx-large;\r\n  color: black;\r\n  font-weight: 1000;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  margin: 0 1em;\r\n  font-size: medium;\r\n  font-weight: bold;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border: none; \r\n  background: none; \r\n  padding: 0; \r\n}\r\n\r\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.cartImg3[_ngcontent-%COMP%] {\r\n  width: 2em; \r\n  height: auto; \r\n  margin-right: 1em; \r\n  vertical-align: middle; \r\n}\r\n\r\n#counter[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -0.8em; \r\n  right: -1.1em; \r\n  background-color: red; \r\n  color: white; \r\n  border-radius: 50%; \r\n  width: 1.2em; \r\n  height: 1.2em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.user-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.logout-btn[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 25%;\r\n  background-color: #eb8f9f;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  padding: 0.2em;\r\n  display: none;\r\n}\r\n\r\n.user-container[_ngcontent-%COMP%]:hover   .logout-btn[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgbWF4LWhlaWdodDogNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDIzMiwgMjI3KTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG59XHJcbi5sb2dvOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLmFjdGlvbnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9ucyBhe1xyXG4gIG1hcmdpbjogMCAxZW07XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFjdGlvbnMgYTpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogbm9uZTsgXHJcbiAgYmFja2dyb3VuZDogbm9uZTsgXHJcbiAgcGFkZGluZzogMDsgXHJcbn1cclxuLmFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FydEltZzMge1xyXG4gIHdpZHRoOiAyZW07IFxyXG4gIGhlaWdodDogYXV0bzsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IFxyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxyXG59XHJcblxyXG4jY291bnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTAuOGVtOyBcclxuICByaWdodDogLTEuMWVtOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IFxyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICB3aWR0aDogMS4yZW07IFxyXG4gIGhlaWdodDogMS4yZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnVzZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sb2dvdXQtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI4ZjlmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLWNvbnRhaW5lcjpob3ZlciAubG9nb3V0LWJ0biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pop-up/pop-up.component */ "dHfX");
/* harmony import */ var _components_buy_popup_buy_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buy-popup/buy-popup.component */ "GgTN");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "jAig");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_1__["PopUpComponent"],
        _components_buy_popup_buy_popup_component__WEBPACK_IMPORTED_MODULE_2__["BuyPopupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _features_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/components/home-page/home-page.component */ "dkuI");


class AppComponent {
    constructor() {
        this.title = 'ZomatoClone';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-page");
    } }, directives: [_features_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.module */ "hB0V");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/material/material.module */ "jAig");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/cart.service */ "7pSQ");
/* harmony import */ var _core_services_item_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/item-list.service */ "MSuk");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _features_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/components/login-page/login-page.component */ "ISYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_core_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"], _core_services_item_list_service__WEBPACK_IMPORTED_MODULE_10__["ItemListService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _features_features_module__WEBPACK_IMPORTED_MODULE_5__["FeaturesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _features_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _features_features_module__WEBPACK_IMPORTED_MODULE_5__["FeaturesModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]] }); })();


/***/ }),

/***/ "d+Y1":
/*!**********************************************************************!*\
  !*** ./src/app/features/components/item-card/item-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var src_app_shared_components_buy_popup_buy_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/buy-popup/buy-popup.component */ "GgTN");
/* harmony import */ var src_app_shared_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/pop-up/pop-up.component */ "dHfX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function ItemCardComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.randomNumber, "% off");
} }
class ItemCardComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(item) {
        // let dialogRef = 
        this.dialog.open(src_app_shared_components_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_1__["PopUpComponent"], { data: { item: item } });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result is ${result}`);
        // });
    }
    openBuyDialog(item) {
        // let buyDialogRef = 
        this.dialog.open(src_app_shared_components_buy_popup_buy_popup_component__WEBPACK_IMPORTED_MODULE_0__["BuyPopupComponent"], { data: { item: item } });
        // buyDialogRef.afterClosed().subscribe(result => {
        //   console.log(`You total is ${result}`);
        // });
    }
    ngOnInit() {
        this.randomNumber = this.generateRandomNumber(15, 30);
    }
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
ItemCardComponent.ɵfac = function ItemCardComponent_Factory(t) { return new (t || ItemCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItemCardComponent, selectors: [["app-item-card"]], inputs: { item: "item" }, decls: 21, vars: 12, consts: [[1, "item-card"], ["class", "offer", 4, "ngIf"], [1, "itemImage", 3, "src", "alt"], ["alt", "", 1, "top-right", 3, "src"], [1, "cardContent"], [1, "priceRating"], ["id", "price"], ["id", "rating"], [1, "card-button"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "offer"]], template: function ItemCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemCardComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemCardComponent_Template_button_click_17_listener() { return ctx.openDialog(ctx.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "More Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemCardComponent_Template_button_click_19_listener() { return ctx.openBuyDialog(ctx.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.randomNumber < 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.item.vegNonveg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx.item.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 9, ctx.item.price, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.item.rating, "\u2B50");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".item-card[_ngcontent-%COMP%] {\r\n    margin: 2em;\r\n    \r\n    border-radius: 10%;\r\n    position: relative;\r\n    box-shadow: 0 4px 8px 0 #000000, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 4px 8px 0 #f8b3a7, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.itemImage[_ngcontent-%COMP%]{\r\n    width: 25em;\r\n    height: 15em;\r\n    \r\n    border-radius: 10%;\r\n}\r\n\r\n.offer[_ngcontent-%COMP%]{\r\n    margin-left: 1px;\r\n    background-color: yellow;\r\n    position: absolute;\r\n    width: 15%;\r\n    top: 4%;\r\n    left: 0px;\r\n    z-index: 1;\r\n    font-size: small;\r\n}\r\n\r\n\r\n\r\n.cardContent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n}\r\n\r\n.cardContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-left: 3em;\r\n    width: 100%;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    \r\n}\r\n\r\n.priceRating[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#rating[_ngcontent-%COMP%] {\r\n    margin-right: 4em;\r\n}\r\n\r\n#price[_ngcontent-%COMP%] {\r\n    margin-left: 4em;\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.top-right[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n    z-index: 1;\r\n    color: red;\r\n    height: 1.5em;\r\n    width: 1.5em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlFQUFpRTtBQUNyRTs7QUFFQTtJQUNJLGlFQUFpRTtJQUNqRSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtFQUNkIiwiZmlsZSI6Iml0ZW0tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY2FyZCB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIC8qIHBhZGRpbmc6IDAuNWVtOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzAwMDAwMCwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5pdGVtLWNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgI2Y4YjNhNywgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uaXRlbUltYWdle1xyXG4gICAgd2lkdGg6IDI1ZW07XHJcbiAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAvKiBtYXJnaW46IDFlbTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuLm9mZmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICB0b3A6IDQlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi8qIC5jYXJkQ29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbi5jYXJkQ29udGVudCBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5jYXJkQ29udGVudCBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pdGVtLWNhcmQgaDMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbn1cclxuXHJcbi5wcmljZVJhdGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4jcmF0aW5nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNGVtO1xyXG59XHJcblxyXG4jcHJpY2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRlbTtcclxufVxyXG5cclxuLml0ZW0tY2FyZCBidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcblxyXG4udG9wLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICB3aWR0aDogMS41ZW07XHJcbiAgfVxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "dHfX":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/pop-up/pop-up.component.ts ***!
  \**************************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class PopUpComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
PopUpComponent.ɵfac = function PopUpComponent_Factory(t) { return new (t || PopUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
PopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopUpComponent, selectors: [["app-pop-up"]], decls: 7, vars: 2, consts: [["mat-dialog-title", ""], ["mat-button", "", "mat-dialog-close", "", "mat-dialog-close", "true"]], template: function PopUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("You selected ", ctx.data.item.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.item.description, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3AtdXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "dkuI":
/*!**********************************************************************!*\
  !*** ./src/app/features/components/home-page/home-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/components/header/header.component */ "OOyK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/components/footer/footer.component */ "x0xU");




class HomePageComponent {
    constructor() {
        this.foodItems = [
            {
                "id": 1,
                "name": "Pizza",
                "price": 499,
                "rating": 4.5,
                "image": "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
            },
            {
                "id": 2,
                "name": "Burger",
                "price": 99,
                "rating": 4.2,
                "image": "https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg"
            },
            {
                "id": 3,
                "name": "Pasta",
                "price": 299,
                "rating": 4.4,
                "image": "https://img.freepik.com/free-photo/gourmet-italian-bolognese-pasta-with-fresh-parmesan-generated-by-ai_188544-9453.jpg"
            },
            {
                "id": 4,
                "name": "Pav Bhaji",
                "price": 199,
                "rating": 4.8,
                "image": "https://th.bing.com/th/id/OIG3.gN55KDbb9.gYKNRODCBz?pid=ImgGn"
            },
            {
                "id": 5,
                "name": "Tacos",
                "price": 149,
                "rating": 4.3,
                "image": "https://th.bing.com/th/id/OIG1.bIRiuMhVZ0oGUYMLQMRE?w=1024&h=1024&rs=1&pid=ImgDetMain"
            },
            {
                "id": 6,
                "name": "Ice Cream",
                "price": 99,
                "rating": 4.1,
                "image": "https://cdn.pixabay.com/photo/2023/06/24/16/17/ai-generated-8085574_1280.jpg"
            },
        ];
    }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 3, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "hB0V":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "dkuI");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "K+dn");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "pKmL");
/* harmony import */ var _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item-card/item-card.component */ "d+Y1");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material/material.module */ "jAig");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "CKr9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_items_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/items/items.component */ "ljDG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "Di/X");
/* harmony import */ var _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/payment-page/payment-page.component */ "I5Nq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class FeaturesModule {
}
FeaturesModule.ɵfac = function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); };
FeaturesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__["ItemCardComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _components_items_items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"],
        _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailsComponent"],
        _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_11__["PaymentPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]], exports: [_components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]] }); })();


/***/ }),

/***/ "jAig":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








const MaterialComponent = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[MaterialComponent], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]] }); })();


/***/ }),

/***/ "ljDG":
/*!**************************************************************!*\
  !*** ./src/app/features/components/items/items.component.ts ***!
  \**************************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_item_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/item-list.service */ "MSuk");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user-login.service */ "7+Ay");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../item-card/item-card.component */ "d+Y1");










function ItemsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry. We don't have that right now!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-item-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r2);
} }
class ItemsComponent {
    constructor(itemService, titleService, authService) {
        this.itemService = itemService;
        this.titleService = titleService;
        this.authService = authService;
        this.foodItems = [];
        this.preference = 'any';
        this.findItem = '';
        this.pageSize = 6;
        this.currentPage = 0;
        this.userLoggedIn = false;
        this.userName = '';
        titleService.setTitle('ZomatoClone | Home');
    }
    ngOnInit() {
        this.itemService.getItem().subscribe(data => this.foodItems = data);
        //For user details
        this.authService.userLoggedIn$.subscribe(loggedIn => {
            this.userLoggedIn = loggedIn;
        });
        this.authService.userName$.subscribe(name => {
            this.userName = name;
        });
    }
    get filteredItems() {
        if (this.preference === 'any' && !this.findItem.trim()) {
            return this.foodItems;
        }
        else {
            return this.foodItems.filter(item => {
                const preferenceMatch = this.preference === 'any' || this.preference === item.preference;
                const nameMatch = !this.findItem.trim() || item.name.toLowerCase().includes(this.findItem.trim().toLowerCase());
                return preferenceMatch && nameMatch;
            });
        }
    }
    get pagedItems() {
        const startIndex = this.currentPage * this.pageSize;
        return this.filteredItems.slice(startIndex, startIndex + this.pageSize);
    }
    onPageChange(event) {
        this.currentPage = event.pageIndex;
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_item_list_service__WEBPACK_IMPORTED_MODULE_1__["ItemListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["app-items"]], decls: 25, vars: 8, consts: [[1, "itemContainer"], [1, "features"], [1, "preference"], [1, "preferenceBtn"], ["type", "radio", "value", "any", "name", "preference", 3, "ngModel", "ngModelChange"], ["for", "filter"], ["type", "radio", "value", "Veg", "name", "preference", 3, "ngModel", "ngModelChange"], ["for", "filter", "id", "veg"], ["type", "radio", "value", "Non-Veg", "name", "preference", 3, "ngModel", "ngModelChange"], ["for", "filter", "id", "nonVeg"], [1, "searchItem"], ["appearance", "outline"], ["matInput", "", "name", "searchItem", 3, "ngModel", "ngModelChange"], [1, "cards"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "length", "pageSize", "page"], [3, "item"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsComponent_Template_input_ngModelChange_4_listener($event) { return ctx.preference = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.preference = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Veg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.preference = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Non-veg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search items...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.findItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ItemsComponent_div_21_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ItemsComponent_div_22_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ItemsComponent_Template_mat_paginator_page_23_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.preference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.findItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredItems.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.filteredItems.length)("pageSize", ctx.pageSize);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_9__["ItemCardComponent"]], styles: [".itemContainer[_ngcontent-%COMP%]{\r\n    min-height: 100%;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.features[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.searchItem[_ngcontent-%COMP%]{\r\n    margin-right: 5em;\r\n    margin-top: 2em;\r\n}\r\n\r\n.preference[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 2em;\r\n    margin-left: 2em;\r\n}\r\n\r\n.preferenceBtn[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n#veg[_ngcontent-%COMP%] {\r\n    color: green;\r\n}\r\n\r\n#nonVeg[_ngcontent-%COMP%] {\r\n    color: red\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .searchItem[_ngcontent-%COMP%]{\r\n        margin-right: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJpdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1Db250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaEl0ZW17XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuLnByZWZlcmVuY2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbi5wcmVmZXJlbmNlQnRuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jdmVnIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI25vblZlZyB7XHJcbiAgICBjb2xvcjogcmVkXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2VhcmNoSXRlbXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "OOyK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "x0xU");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _features_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/components/about/about.component */ "CKr9");
/* harmony import */ var _features_components_items_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/components/items/items.component */ "ljDG");
/* harmony import */ var _features_components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/components/user-details/user-details.component */ "Di/X");
/* harmony import */ var _features_components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/components/payment-page/payment-page.component */ "I5Nq");
/* harmony import */ var _features_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/components/login-page/login-page.component */ "ISYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'about', component: _features_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    // {path:'cart', component:CartComponent},
    { path: '', component: _features_components_items_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: 'userDetails', component: _features_components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
    { path: 'payments', component: _features_components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_4__["PaymentPageComponent"] },
    { path: 'login', component: _features_components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x0xU":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 0, consts: [[1, "container"], [1, "thankYou"], [1, "contact"], ["href", "mailto:zomatoclone.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hope you had a great time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "zomato clone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " made with \u2764\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact Us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\uD83D\uDD7F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+91-9876543210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2709");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "zomatoclone@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: rgb(246, 232, 227);\r\n    padding: 1em;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjMyLCAyMjcpO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map