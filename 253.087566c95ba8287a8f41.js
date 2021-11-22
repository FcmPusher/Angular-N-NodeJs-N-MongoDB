"use strict";(self.webpackChunkangular_boilerplate=self.webpackChunkangular_boilerplate||[]).push([[253],{2253:(R,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>k});var h=a(8583),r=a(3679),g=a(3737),p=a(9337),x=a(8939),m=a(1011),f=a(928),d=a(3187),i=a(1243),s=a(5145),e=a(7716);let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:2,vars:0,template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"forgot-password-email-sent works!"),e.\u0275\u0275elementEnd())},styles:[""]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:2,vars:0,template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"forgot password works!"),e.\u0275\u0275elementEnd())},styles:[""]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:2,vars:0,template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"password-reset-failed works!"),e.\u0275\u0275elementEnd())},styles:[""]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:2,vars:0,template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"password-reset-succeeded works!"),e.\u0275\u0275elementEnd())},styles:[""]}),t})(),y=(()=>{class t{constructor(){this.passwordResetForm=new r.FormGroup({email:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)])})}onSubmit(){console.log({email:this.passwordResetForm.controls.email.value})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:27,vars:2,consts:[[1,"container","mx-auto"],[1,"flex","justify-center","px-6","my-12"],[1,"flex","w-full","xl:w-3/4","lg:w-11/12"],[1,"hidden","w-full","h-auto","bg-gray-400","bg-cover","rounded-l-lg","lg:block","lg:w-1/2",2,"background-image","url('https://source.unsplash.com/oWTW-jNGl9I/600x800')"],[1,"w-full","p-5","bg-white","rounded-lg","lg:w-1/2","lg:rounded-l-none"],[1,"px-8","mb-4","text-center"],[1,"pt-4","mb-2","text-2xl","text-gray-700"],[1,"mb-4","text-sm","text-gray-700"],[1,"px-8","pt-6","pb-8","mb-4","bg-white","rounded",3,"formGroup","ngSubmit"],[1,"mb-4"],["for","email",1,"block","mb-2","text-sm","font-bold","text-gray-700"],["id","email","type","email","formControlName","email",1,"w-full","px-3","py-2","text-sm","leading-tight","text-gray-700","border","rounded","shadow","appearance-none","focus:outline-none","focus:shadow-outline"],["formControlName","email"],[1,"mb-6","text-center"],["type","submit",1,"w-full","px-4","py-2","font-bold","text-white","bg-red-500","rounded-full","hover:bg-red-700","focus:outline-none","focus:shadow-outline",3,"disabled"],[1,"mb-6","border-t"],[1,"text-center"],["routerLink","/auth/sign-up",1,"inline-block","text-sm","text-blue-500","align-baseline","hover:text-blue-800"],["routerLink","/auth/sign-in",1,"inline-block","text-sm","text-blue-500","align-baseline","hover:text-blue-800"]],template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275element(3,"div",3),e.\u0275\u0275elementStart(4,"div",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275elementStart(6,"h3",6),e.\u0275\u0275text(7,"Forgot Your Password?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"p",7),e.\u0275\u0275text(9," We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"form",8),e.\u0275\u0275listener("ngSubmit",function(){return l.onSubmit()}),e.\u0275\u0275elementStart(11,"div",9),e.\u0275\u0275elementStart(12,"label",10),e.\u0275\u0275text(13," Email "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-input",11),e.\u0275\u0275text(15," Type a Email ID "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"tui-field-error",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",13),e.\u0275\u0275elementStart(18,"button",14),e.\u0275\u0275text(19," Reset Password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(20,"hr",15),e.\u0275\u0275elementStart(21,"div",16),e.\u0275\u0275elementStart(22,"a",17),e.\u0275\u0275text(23," Create an Account! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"div",16),e.\u0275\u0275elementStart(25,"a",18),e.\u0275\u0275text(26," Already have an account? Login! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(10),e.\u0275\u0275property("formGroup",l.passwordResetForm),e.\u0275\u0275advance(8),e.\u0275\u0275property("disabled",!l.passwordResetForm.valid))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,m.K3,r.NgControlStatus,r.FormControlName,d.y,i.yS],styles:[""],changeDetection:0}),t})();var E=a(7423);const C=[{path:s.x.config.auth.signIn,component:(()=>{class t{constructor(n,l,u){this.router=n,this.activatedRoute=l,this.authService=u,this.signInForm=new r.FormGroup({email:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)]),password:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)])}),this.returnUrl=this.activatedRoute.snapshot.queryParamMap.get("returnUrl")||`/${s.x.config.base.home}`}onClickSignIn(){this.authService.signIn(),this.router.navigate([this.returnUrl])}onSubmit(){this.authService.signIn(),this.router.navigate([this.returnUrl]),console.log({email:this.signInForm.controls.email.value,password:this.signInForm.controls.password.value})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(i.F0),e.\u0275\u0275directiveInject(i.gz),e.\u0275\u0275directiveInject(E.e))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:44,vars:2,consts:[[1,"font-sans"],[1,"relative","flex","flex-col","items-center","min-h-screen","sm:justify-center"],[1,"relative","w-full","sm:max-w-sm"],[1,"absolute","w-full","h-full","transform","bg-blue-400","shadow-lg","card","rounded-3xl","-rotate-6"],[1,"absolute","w-full","h-full","transform","bg-red-400","shadow-lg","card","rounded-3xl","rotate-6"],[1,"relative","w-full","px-6","py-4","bg-gray-100","shadow-md","rounded-3xl"],["for","",1,"block","mt-3","text-sm","font-semibold","text-center","text-gray-700"],[1,"mt-10",3,"formGroup","ngSubmit"],["formControlName","email",1,"block","w-full","mt-1","bg-gray-100","border-none","shadow-lg","h-11","rounded-xl","hover:bg-blue-100","focus:bg-blue-100","focus:ring-0"],["formControlName","email"],[1,"mt-7"],["formControlName","password",1,"block","w-full","mt-1","bg-gray-100","border-none","shadow-lg","h-11","rounded-xl","hover:bg-blue-100","focus:bg-blue-100","focus:ring-0"],["formControlName","password"],[1,"flex","mt-7"],["for","remember_me",1,"inline-flex","items-center","w-full","cursor-pointer"],["id","remember_me","type","checkbox","name","remember",1,"text-indigo-600","border-gray-300","rounded","shadow-sm","focus:border-indigo-300","focus:ring","focus:ring-indigo-200","focus:ring-opacity-50"],[1,"ml-2","text-sm","text-gray-600"],[1,"w-full","text-right"],["routerLink","/auth/password-reset",1,"text-sm","text-gray-600","underline","hover:text-gray-900"],[1,"w-full","py-3","text-white","transition","duration-500","ease-in-out","transform","bg-blue-500","shadow-xl","rounded-xl","hover:shadow-inner","focus:outline-none","hover:-translate-x","hover:scale-105",3,"disabled"],[1,"flex","items-center","text-center","mt-7"],[1,"w-full","border-gray-300","rounded-md","border-1"],[1,"block","w-full","text-sm","font-medium","text-gray-600"],[1,"flex","justify-center","w-full","mt-7"],[1,"px-4","py-2","mr-5","text-white","transition","duration-500","ease-in-out","transform","bg-blue-500","border-none","shadow-xl","cursor-pointer","rounded-xl","hover:shadow-inner","hover:-translate-x","hover:scale-105"],[1,"px-4","py-2","text-white","transition","duration-500","ease-in-out","transform","bg-red-500","border-none","shadow-xl","cursor-pointer","rounded-xl","hover:shadow-inner","hover:-translate-x","hover:scale-105"],[1,"flex","items-center","justify-center"],[1,"mr-2"],["routerLink","/auth/sign-up",1,"text-blue-500","transition","duration-500","ease-in-out","transform","hover:-translate-x","hover:scale-105"]],template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275element(3,"div",3),e.\u0275\u0275element(4,"div",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275elementStart(6,"label",6),e.\u0275\u0275text(7," Login "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"form",7),e.\u0275\u0275listener("ngSubmit",function(){return l.onSubmit()}),e.\u0275\u0275elementStart(9,"div"),e.\u0275\u0275elementStart(10,"tui-input",8),e.\u0275\u0275text(11," Type a Email ID "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(12,"tui-field-error",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"div",10),e.\u0275\u0275elementStart(14,"tui-input",11),e.\u0275\u0275text(15," Type a Password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"tui-field-error",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",13),e.\u0275\u0275elementStart(18,"label",14),e.\u0275\u0275element(19,"input",15),e.\u0275\u0275elementStart(20,"span",16),e.\u0275\u0275text(21," remeber me "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"div",17),e.\u0275\u0275elementStart(23,"a",18),e.\u0275\u0275text(24," Forgot your password ? "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"div",10),e.\u0275\u0275elementStart(26,"button",19),e.\u0275\u0275text(27," Login "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"div",20),e.\u0275\u0275element(29,"hr",21),e.\u0275\u0275elementStart(30,"label",22),e.\u0275\u0275text(31," Login With "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(32,"hr",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"div",23),e.\u0275\u0275elementStart(34,"button",24),e.\u0275\u0275text(35," Facebook "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"button",25),e.\u0275\u0275text(37," Google "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"div",10),e.\u0275\u0275elementStart(39,"div",26),e.\u0275\u0275elementStart(40,"label",27),e.\u0275\u0275text(41,"You're new ?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"a",28),e.\u0275\u0275text(43," Create an account "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("formGroup",l.signInForm),e.\u0275\u0275advance(18),e.\u0275\u0275property("disabled",!l.signInForm.valid))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,m.K3,r.NgControlStatus,r.FormControlName,d.y,i.yS],styles:[""],changeDetection:0}),t})()},{path:s.x.config.auth.signUp,component:(()=>{class t{constructor(){this.signUpForm=new r.FormGroup({userName:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)]),email:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)]),password:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)]),cpassword:new r.FormControl("",[r.Validators.required,r.Validators.minLength(5)])})}onSubmit(){console.log({name:this.signUpForm.controls.userName.value,email:this.signUpForm.controls.email.value,password:this.signUpForm.controls.password.value})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:32,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"flex","flex-col","min-h-screen","bg-grey-lighter"],[1,"container","flex","flex-col","items-center","justify-center","flex-1","max-w-sm","px-2","mx-auto"],[1,"w-full","px-6","py-8","text-black","bg-white","rounded","shadow-md"],[1,"mb-8","text-3xl","text-center"],["tuiHintContent","Type 5 letters or more","formControlName","userName",1,"block","w-full","p-3","mb-4","border","rounded","b-form","border-grey-light"],["formControlName","userName"],["formControlName","email",1,"block","w-full","p-3","mb-4","border","rounded","border-grey-light"],["formControlName","email"],["tuiHintContent","Type 5 letters or more","formControlName","password",1,"block","w-full","p-3","mb-4","border","rounded","b-form","border-grey-light"],["formControlName","password"],["tuiHintContent","Type 5 letters or more","formControlName","cpassword",1,"block","w-full","p-3","mb-4","border","rounded","b-form","border-grey-light"],["formControlName","cpassword"],["tuiButton","","type","submit","appearance","primary",1,"w-full","py-3","my-1","text-center","text-white","rounded","tui-space_right-3","tui-space_bottom-3","bg-green","hover:bg-green-dark","focus:outline-none",3,"disabled"],[1,"mt-4","text-sm","text-center","text-grey-dark"],["tuiLink","","routerLink","#",1,"no-underline","border-b","border-grey-dark","text-grey-dark"],[1,"mt-6","text-grey-dark"],["routerLink","/auth/sign-in",1,"no-underline","border-b","border-blue","text-blue"]],template:function(n,l){1&n&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275listener("ngSubmit",function(){return l.onSubmit()}),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275elementStart(2,"div",2),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275elementStart(4,"h1",4),e.\u0275\u0275text(5,"Sign up"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-input",5),e.\u0275\u0275text(7," Type a Full Name "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"tui-field-error",6),e.\u0275\u0275elementStart(9,"tui-input",7),e.\u0275\u0275text(10," Type a Email ID "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-field-error",8),e.\u0275\u0275elementStart(12,"tui-input-password",9),e.\u0275\u0275text(13," Type a Password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"tui-field-error",10),e.\u0275\u0275elementStart(15,"tui-input-password",11),e.\u0275\u0275text(16," Type a confirm password "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(17,"tui-field-error",12),e.\u0275\u0275elementStart(18,"button",13),e.\u0275\u0275text(19," Create Account "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div",14),e.\u0275\u0275text(21," By signing up to FCMPusher, you agree to the "),e.\u0275\u0275elementStart(22,"a",15),e.\u0275\u0275text(23," Terms of Service "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(24," and "),e.\u0275\u0275elementStart(25,"a",15),e.\u0275\u0275text(26," Privacy Policy "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",16),e.\u0275\u0275text(28," Already have an account? "),e.\u0275\u0275elementStart(29,"a",17),e.\u0275\u0275text(30," Log in "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(31,". "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("formGroup",l.signUpForm),e.\u0275\u0275advance(18),e.\u0275\u0275property("disabled",!l.signUpForm.valid))},directives:[r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,m.K3,r.NgControlStatus,r.FormControlName,d.y,f.Vs,g.v,p.V,i.yS],styles:[""],changeDetection:0}),t})()},{path:s.x.config.auth.forgotPassword,component:w},{path:s.x.config.auth.forgotPasswordEmailSent,component:b},{path:s.x.config.auth.passwordReset,component:y},{path:s.x.config.auth.passwordResetSucceeded,component:v},{path:s.x.config.auth.passwordResetFailed,component:S}];let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[i.Bz.forChild(C)],i.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[h.ez,N,r.FormsModule,r.ReactiveFormsModule,m.Qf,g.f,f.UO,p.j,x.S,d.C]]}),t})()}}]);