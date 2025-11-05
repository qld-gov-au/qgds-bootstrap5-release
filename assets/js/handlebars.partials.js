"use strict";(()=>{function c(e,a,i){switch(a){case"==":return e==i;case"===":return e===i;case"!=":return e!=i;case"!==":return e!==i;case"<":return e<i;case"<=":return e<=i;case">":return e>i;case">=":return e>=i;case"&&":return e&&i;case"||":return e||i;case"in":return typeof e=="string"&&typeof i=="string"?i.split(",").map(t=>t.trim()).includes(e):!1;case"contains":return typeof e=="string"&&typeof i=="string"?e.toLowerCase().indexOf(i.toLowerCase())>=0:!1;default:return!1}}function r(e){e.registerHelper("contains",function(a,i,t){return a=e.escapeExpression(a),i=e.escapeExpression(i),i.indexOf(a)>-1?t.fn(this):t.inverse(this)}),e.registerHelper("ifCond",function(a,i,t,C){return c(a,i,t)?C.fn(this):C.inverse(this)}),e.registerHelper("cond",(a,i,t)=>c(a,i,t)),e.registerHelper("isType",function(a,i,t){return a===i?t.fn(this):t.inverse(this)}),e.registerHelper("ifAny",function(...a){let i=a.pop();return a.some(t=>!!t)?i.fn(this):i.inverse(this)}),e.registerHelper("ifAll",function(...a){let i=a.pop();return a.every(t=>!!t)?i.fn(this):i.inverse(this)}),e.registerHelper("now",function(){return new Date().toISOString()}),e.registerHelper("formatDate",function(a,i,t){let C;if(a&&(C=new Date(a)),isNaN(C)&&i&&(C=new Date(i)),isNaN(C))return"Invalid Date";var s=["January","February","March","April","May","June","July","August","September","October","November","December"],o=C.getDate(),l=s[C.getMonth()],n=C.getFullYear();switch(t){case"YYYY":return`${n}`;case"MMMM YYYY":return`${l} ${n}`;default:return`${o} ${l} ${n}`}}),e.registerHelper("formatDateOrToday",function(a,i){let t=a||new Date().toISOString();return e.helpers.formatDate(a,t,i)}),e.registerHelper("formatDuration",function(a,i){if(!a)return"";if(typeof a=="string"&&i!=="long")return a;let t="",C=[],s,o,l;if(typeof a=="string"){let n=a.split(":");l=n[0],n.length==2?[o="",l=""]=n:n.length==3&&([s="",o="",l=""]=n)}else[s="",o="",l=""]=a;return i==="long"?(s>0&&C.push(`${s} hour${s>1?"s":""}`),o>0&&C.push(`${o} minute${o>1?"s":""}`),l>0&&C.push(`${l} second${l>1?"s":""}`),t=C.join(" ")):(s>0&&C.push(s.toString().padStart(2,0)),C.push(o.toString().padStart(2,0)),C.push(l.toString().padStart(2,0)),t=C.join(":")),t}),e.registerHelper("isdefined",function(a,i){return a!==void 0&&a!==""?a:i}),e.registerHelper("getClassNames",function(a,i){let t=a.split(",").map(s=>s.trim()),C=[];for(let s=0;s<t.length;s++){let o=t[s];if(i){for(let l=0;l<i.length;l++)if(i[l][o]===!0){C.push(o);break}}}return C.length>0?C.join(" "):""}),e.registerHelper("join",function(a,i){return(!i||typeof i!="string")&&(i=" "),Array.isArray(a)?a.join(i):a}),e.registerHelper("toCamelCase",function(a){return typeof a!="string"?a:a.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,(i,t)=>t===0?i.toLowerCase():i.toUpperCase()).replace(/\s+/g,"")})}typeof Handlebars!="undefined"&&r(Handlebars);var p=`<!-- QGDS Component: Accordion -->
<div class="accordion-group">
    {{#if toggleAll}}
        <div class="accordion-toggle">
            <button class="accordion-toggle-btn accordion-toggle-btn--closed" type="button">Open all</button>
        </div>
    {{/if}}
    <div class="accordion" id="{{groupid}}">
        {{#each accordionItems }}
        <div class="accordion-item">
            <{{isdefined ../headingTag 'h2'}} class="accordion-header" id="heading-{{id}}">
                <button class="accordion-button {{#unless expanded}}collapsed{{/unless}}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{{id}}" aria-expanded="{{expanded}}" aria-controls="collapse-{{id}}">
                    {{title}}
                </button>
            </{{isdefined ../headingTag 'h2'}}>

            <div id="collapse-{{id}}" class="accordion-collapse collapse {{#if expanded}}show{{/if}}" aria-labelledby="heading-{{id}}" role="region">
                <div class="accordion-body">
                    {{{content}}}
                </div>
            </div>
        </div>
        {{/each }}
    </div>
</div>
`;var f=`{{#unless hide_back_to_top}}
  <div class="back-to-top d-print-none">
    {{> directionLinks  
        label= (isdefined directionalLink.label "Back to top")
        href= (isdefined directionalLink.href "#")
        class= "up" 
    }}
  </div>
{{/unless}}`;var u=`<!-- QGDS Banner Component -->
  <div class="qld-banner qld-banner-grid {{ bannerType }} {{ variantClass }} {{ backgroundType }}" >
    <div class="container-fluid">
      <div class="banner-inner">

        <div class="banner-breadcrumbs">
          {{> breadcrumbs breadcrumbs }}
        </div>

        <div class="banner-content">

          {{#if title}}
          {{!-- titleClasses accepts a "title-block" class --}}
          <h1 class="banner-title-wrap {{ join titleClasses }}">
            <span class="banner-title">{{~title~}}</span>
            {{#if subtitle }}
            <span class="banner-subtitle">{{~subtitle~}}</span>
            {{/if}}
          </h1>
          {{/if}}


          {{#if abstract}}
          <div class="banner-abstract">
            {{abstract}}
          </div>
          {{/if}}

          {{!-- CTA Buttons block. Pass an array of button data objects --}}
          {{#if buttons}}
          <div class="banner-cta" role="group" aria-label="Available options">
            <div class="cta-buttons">
              {{#each buttons}}
              {{> button this }}
              {{/each}}
            </div>
          </div>
          {{/if}}

          {{!-- CTA Cards block. Pass an array of card data objects --}}
          {{#if cards}}
          <div class="banner-cta" role="group" aria-label="Available options">
            <div class="cta-cards">
              {{#each cards }}
              {{> card this }}
              {{/each }}
            </div>
          </div>
          {{/if}}

        </div>
        {{!-- End banner content --}}

        {{#ifAll image image.url (cond backgroundType "==" "with-hero-image")}}
        <div class="banner-image {{ join image.classes }}">
          <div class="banner-image-inner" style="background-image:url({{image.url}})" role="img"
            aria-label="{{ image.alt }}"></div>
        </div>
        {{/ifAll}}
      </div>
    </div>
  </div>`;var m=`<!-- QGDS Component: Blockquote -->

<figure class="blockquote {{classes}}">

	<blockquote cite="{{cite-url}}">
		{{{content}}}
	</blockquote>

	<figcaption class="quote-source">
		{{cite-text}}
	</figcaption>

</figure>`;var g=`<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    {{#each breadcrumbs}}
      {{! print all breadcrumbs except the current page as links}}
      {{#unless @last}}
        <li class="breadcrumb-item">
          <a href="{{link}}">{{linktext}}</a>
        </li>
      {{/unless}}
      {{! print the current page as plain text}}
      {{#if @last}}
        <li
          class="breadcrumb-item active"
          aria-current="page"
          data-href="{{link}}"
        >{{linktext}}</li>
      {{/if}}
    {{/each}}
  </ol>
</nav>`;var h=`<!-- breadcrumbs-->
<div class="container-fluid alt">
  <div class="container">
    <div class="row">
      <div class="container-xl">

        {{> @partial-block }}
      </div>
    </div>
  </div>
</div>`;var v=`{{!-- Button icon partial --}}
{{#*inline "buttonIcon"~}}
<span class="qld-icon qld-icon-md {{iconClass}} {{iconPosition}}" aria-hidden="true"></span>
{{~/inline}} 

{{!-- Progress spinner partial --}}
{{#*inline "progressSpinner"~}}
<div class="spinner-border"></div>
{{~/inline}}

{{#unless islink}}

  <button class="btn {{variantClass}} {{#if isprogress}}btn-progress{{/if}} {{label}}" onclick="{{{onclick}}}" {{#if isdisabled}}disabled{{/if}} {{#if isprogress}}disabled aria-live="polite"{{/if}} {{#if arialabel}}aria-label="{{arialabel}}"{{/if}} {{{dataatts}}} {{#if progressLabel}}data-progress-label="{{progressLabel}}"{{/if}}>
    {{#if isprogress}}
      {{~>progressSpinner~}}
    {{else}}
      {{#if iconClass~}}
        {{#ifCond iconPosition '==' 'leading'}}
          {{~>buttonIcon~}}
        {{/ifCond}}
      {{/if}}
    {{/if}}
    
    <span class="btn-label-default">{{~label~}}</span>
    {{#if isprogress}}
      <span class="btn-label-progress">{{~progressLabel~}}</span>
    {{/if}}
    {{#unless isprogress}}
      {{#if iconClass~}}
        {{#ifCond iconPosition '==' 'trailing'}}
          {{~>buttonIcon~}}
        {{/ifCond}}
      {{/if}}
    {{/unless}}
  </button>

{{else}}
  <a class="btn {{variantClass}} {{#if isdisabled}}disabled {{/if}}{{#if isprogress}}disabled btn-progress{{/if}}" {{#if isdisabled}}aria-disabled="true"{{/if}} {{#if isprogress}}aria-live="polite"{{/if}} href="{{href}}" target="{{target}}" {{#if arialabel}}aria-label="{{arialabel}}"{{/if}} {{#if progressLabel}}data-progress-label="{{progressLabel}}"{{/if}} {{{dataatts}}}>
    {{#if isprogress}}
      {{~>progressSpinner~}}
    {{else}}
      {{#if iconClass~}}
        {{#ifCond iconPosition '==' 'leading'}}
          {{~> buttonIcon~}}
        {{/ifCond}}
      {{/if}}
    {{/if}}
    
    <span class="btn-label-default">{{~label~}}</span>
    <span class="btn-label-progress">{{~progressLabel~}}</span>

    {{#unless isprogress}}
      {{#if iconClass~}}
        {{#ifCond iconPosition '==' 'trailing'}}
          {{~> buttonIcon~}}
        {{/ifCond}}
      {{/if}}
    {{/unless}}
    </a>
{{/unless}}`;var b=`<!-- QGDS Component: Callout -->

<div class="callout">
    {{#if title}}
        <h3 class="callout-title">{{{title}}}</h3>
    {{/if}}
    <div class="callout-text">{{{content}}}</div>
</div>
`;var L=`<a class="qld-cta-link {{getClassNames "small, view-all" class}}"
    {{#if id}}id="{{id}}"{{/if}}
    href="{{href}}" 
    target="{{target}}" 
    {{#if arialabel}}aria-label="{{arialabel}}"{{/if}} 
    >
     {{label}}
    <span class="icon" aria-hidden="true"></span>
</a>`;var H=`<!-- QGDS Partial: card -->

<div class="col{{#if feature}}-md-12 col-lg-12{{/if}}">
    <div class="card card-{{variantClass}} {{variantClass}} {{iconPosition}} card-{{action}}-action{{#if arrow}} card-arrow{{/if}}{{#if equalHeight}} h-100{{/if}}{{#if feature}} card-feature card-feature-{{featureImagePosition}}{{/if}}{{#if video}} card-video{{/if}}">
        {{#if image}}
        <div class="card-img ratio ratio-16x9">
            <div class="{{#if feature}}card-img-{{featureImagePosition}}{{else}}card-img-top{{/if}}"
            style="--card-image:url({{image}})" alt="{{imageAlt}}"></div>
            {{#if video}}
            <div class="video-overlay">
                <div class="video-nav">
                    <div class="video-watch"><span class="qld-icon qld-icon-lg qld-icon-video" aria-hidden="true"></span><span>Watch</span></div>
                    {{#if videoDuration}}
                        <div title="Video duration" class="video-duration"><span class="qld-icon qld-icon-sm qld-icon-clock" aria-hidden="true"></span><span>{{videoDuration}}</span></div>
                    {{/if}}
                </div>
            </div>
            {{/if}}
        </div>
        {{/if}}
        {{#if iconClasses}}
            {{#ifCond iconPosition '==' 'icon-top'}}
                <div class="card-icon-background">
                    <span class="qld-icon qld-icon-xxl {{iconClasses}} {{iconPosition}}" aria-hidden="true"></span>
                </div>
            {{/ifCond}}
            {{#ifCond iconPosition '==' 'icon-left'}}
                <div class="card-icon-background">
                    <span class="qld-icon qld-icon-lg {{iconClasses}} {{iconPosition}}" aria-hidden="true"></span>
                </div>
            {{/ifCond}}
        {{/if}}
        {{#if feature}}<div class="card-inner">{{/if}}
            <div class="card-body">
                {{#if date}}
                <div class="card-date">{{date}}</div>
                {{/if}}
                <{{isdefined headingTag 'h3'}} class="card-title">
                    {{#if link}}
                    <a href="{{link}}" {{#ifCond action '===' 'single'}}class="stretched-link"{{/ifCond}}>{{title}}</a>
                    {{else}}
                    {{ title }}
                    {{/if }}
                </{{isdefined headingTag 'h3'}}>
                {{#if description}}
                <div class="card-text">
                    {{{description}}}
                </div>
                {{/if}}
                {{#if arrow}}
                    <div class="qld-icon qld-icon-md qld-icon-arrow-right"></div>
                {{/if}}
            </div>
            {{#if footer}}
            <div class="card-footer">
                {{{footer}}}
            </div>
            {{/if }}
        {{#if feature}}</div>{{/if}}
    </div>
</div>
`;var V=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>

  <link rel="stylesheet" href="/assets/css/qld.bootstrap.css">
  <script type="text/javascript" async src="/assets/js/bootstrap.min.js"><\/script>
  <script type="text/javascript" async src="/assets/js/qld.bootstrap.min.js"><\/script>

</head>

<body>

  <div class="{{wrapperClasses}} {{join debugClasses }}">

    {{> globalAlert globalAlert }}
    {{> header header}}
    {{> navbar navbar}}
    
    <main id="content">

        <!-- breadcrumbs-->
        {{#if breadcrumbsData }}
        <div class="alt px-0">
            <div class="container">
              {{> breadcrumbs breadcrumbsData }}        
            </div>
        </div>
        {{/if}}

        <!-- Content Wrapper -->
        <div class="container mt-40 mt-lg-64">
          <div class="row">
          
          <!-- Side Navigation -->
          {{#if sidenavData }}
          <div class="col-12 col-lg-3 order-last order-lg-first mt-5 mt-lg-0">
          {{> sidenav sidenavData }}
          </div>
          {{/if}}


          <!-- Content body -->
          <div class="col-12 col-lg-8">

            <!-- Content has an additional 2rem padding-x -->  
            <div class="qld-content-body px-32">

              {{!-- Main content area --}}
              <h1>{{title}}</h1>

              {{#if abstract}}
              <div class="qld-abstract">
                {{{ abstract }}}
              </div>
              {{/if}}

              {{> inpagenav inpageNavData }}

              <h2 id="section-one">Section heading</h2>
              <p>This is the main content inside the wrapper.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum purus at efficitur imperdiet. Maecenas placerat accumsan nulla, vel semper enim. In turpis.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit repudiandae nulla recusandae soluta officia possimus, nostrum nisi fuga laboriosam provident, est molestiae alias blanditiis explicabo consequuntur ullam expedita! Ab.</p>


              <h3>Content heading</h3>
              <p>This is the main content inside the wrapper.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum purus at efficitur imperdiet. Maecenas placerat accumsan nulla, vel semper enim. In turpis.</p>


              <h2 id="section-two">Section heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum purus at efficitur imperdiet. Maecenas placerat accumsan nulla, vel semper enim. In turpis.</p>  


              <section class="emphasis light">
                <h2>Section heading (h2)</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum purus at efficitur imperdiet. Maecenas placerat accumsan nulla, vel semper enim. In turpis.</p>
              </section>

            </div><!-- // content-body -->
          </div><!-- // content-body-column -->

          </div>

          <!-- Content Footer -->
          {{>contentFooter contentFooterData }}
        </div>


        
    {{> footer footer}}

  </div>



</body>
</html>`;var M=`  <div class="row {{classes}}">
    {{#if lastUpdated}}
    <div class="col-auto">
      <dl class="qld-content-dates my-0">
        <dt class="my-0">Last updated:</dt>
        <dd class="my-0">{{formatDateOrToday lastUpdated }}</dd>
      </dl>
    </div>
    {{/if}} 
    {{#if backToTop}}
      <div class="col-12 mt-24 mt-md-0 col-md d-flex justify-content-start justify-content-md-end">                        
        {{> backToTop backToTop}}
      </div>
    {{/if}}  
  </div>
`;var k=`<div class="container qld-content-footer">
  <div class="row">
    {{> @partial-block }}
  </div>
</div>`;var q=`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>

<body>
  <!-- Global ALert -->
  {{> globalAlert globalAlert}}

  <!-- Header -->
  {{> header header }}

  <!-- Navbar -->
  {{> navbar navbar}}

  {{#if banner}}
  {{> banner banner}}
  {{/if}}

  <div class="container mt-40 mt-lg-64">

    {{#if breadcrumbs}}
    <!-- breadcrumbs -->
    {{> breadcrumbs breadcrumbs}}
    {{/if}}

    <!-- Start Main Content Body -->
    <div class="row">

      <!-- Start Side navigation column (span 3) -->
      <div class="col-12 col-lg-3">
        <!-- QGDS Side Navigation Component -->
        {{> sidenav sidenav}}
      </div>
      <!-- End Side navigation column -->

      <!-- Start Main Column (span 8) -->
      <div class="col-12 col-lg-8 mt-40 mt-lg-0">

        <!-- Main Content div, includes a 2rem/32px horizontal padding on large screens and up -->
        <main class="px-lg-32">

          <h1 id="section-heading">Single page form (H1)</h1>

          <p>Your feedback is important to us. It tells us how we can improve and what we\u2019re doing well. Your feedback
            is confidential.</p>

          <h2 id="form-heading">Enquiry form (H2)</h2>

          {{#if inpageAlert}}
          <!-- Inpage Alert -->
          <div class="mb-32">
            {{> inpageAlert inpageAlert}}
          </div>
          {{/if}}

          <!-- Example WYSIWYG content -->
          <p>Any information submitted using this form will be used in line with our privacy statement.</p>
          <p>Required fields are marked with an *</p>


          {{#if form}}
          <!-- Example Form, with 2rem vertical spacing -->
          <form class="qld-form my-32">
            {{#each form.fields1}}
            <div class="form-group mb-32">
              {{#ifCond type '==' 'textbox'}}
              {{> textbox this}}
              {{else ifCond type '==' 'textarea'}}
              {{> textarea this}}
              {{else ifCond type '==' 'radio'}}
              {{> formcheck this}}
              {{/ifCond}}
            </div>
            {{/each}}

            <h3 id="contact-details">Contact details (H3)</h3>

            {{#each form.fields2}}
            <div class="form-group mb-32">
              {{#ifCond type '==' 'textbox'}}
              {{> textbox this}}
              {{else ifCond type '==' 'select'}}
              {{> select this}}
              {{else ifCond type '==' 'checkbox'}}
              {{> formcheck this}}
              {{/ifCond}}
            </div>
            {{/each}}

            {{#if form.buttons}}
            <div class="form-actions d-flex mt-5 gap-4">
              {{#each form.buttons}}
              {{> button this}}
              {{/each}}
            </div>
            {{/if}}
          </form>
          {{/if}}

        </main>

      </div>
      <!-- End Column (span 8) -->

    </div>
    <!-- End Content Row -->

    <!-- Start QGDS Content Footer -->
    <div class="mt-64">
      {{> contentFooter contentFooter}}
    </div>

  </div>
  <!-- End Main .container -->

  <!-- Start QGDS Footer -->
  {{> footer footer}}
  <!-- End QGDS Footer -->

</body>


</html>`;var Z=`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>

<body>
  <!-- Global ALert -->
  {{> globalAlert globalAlert}}

  <!-- Header -->
  {{> header header }}

  <!-- Navbar -->
  {{> navbar navbar}}

  {{#if banner}}
  {{> banner banner}}
  {{/if}}

  <div class="container mt-40 mt-lg-64">

    {{#if breadcrumbs}}
    <!-- breadcrumbs -->
    {{> breadcrumbs breadcrumbs}}
    {{/if}}

    <!-- Start Main Content Body -->
    <div class="row">

      <!-- Start Side navigation column (span 3) -->
      <div class="col-12 col-lg-3">
        <!-- QGDS Side navigation Component -->
        {{> sidenav sidenav}}
      </div>
      <!-- End Side navigation column -->

      <!-- Start Main Column (span 8) -->
      <div class="col-12 col-lg-8 mt-40 mt-lg-0">

        <!-- Main Content div, includes a 2rem/32px horizontal padding on large screens and up -->
        <main class="px-lg-32">

          {{#if inpagenav}}
          <!-- QGDS Inpagenav Component -->
          {{> inpagenav inpagenav}}
          {{/if}}

          <!-- Content Section with top vertical spacer (2rem mobile, 4rem LG and above) -->
          <div class="mt-32 mt-lg-64">
            <h2 id="section-heading">Section heading (H2)</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed facilisis purus eu convallis ut. Morbi condimentum volutpat
              feugiat pellentesque. Auctor amet auctor dolor metus eget diam. Facilisis vitae venenatis vestibulum
              libero ut. Luctus diam pellentesque ipsum accumsan amet commodo.
            </p>
            <p>
              Convallis et ullamcorper ac nisi ornare sed facilisis sem. Scelerisque malesuada vivamus tellus mi vitae
              amet ornare donec malesuada. Nascetur senectus aenean fames id turpis.
            </p>
          </div>


          <!-- Content Section with top vertical spacer (2rem mobile, 4rem LG and above) -->
          <div class="mt-32 mt-lg-64">

            <h2 id="content-heading">Content heading (H2)</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>

            {{#if calloutdata}}
            <!-- QGDS Callout Component -->
            {{> callout calloutdata}}
            {{/if}}
          </div>



          <!-- Content Section with top vertical spacer (2rem mobile, 2.5rem LG and above) -->
          <div class="mt-32 mt-lg-40">
            <h3 id="inspection">Pre-registration inspection (H3)</h3>
            <p>Information about pre-registration inspection requirements.</p>

            <h4 id="fees-and-charges">Fees and charges (H4)</h4>
            <p>Details about fees and charges for vehicle registration.</p>


            {{#if accordionItems}}
            <!-- QGDS Accordion Component with 24px/1.5rem margin-top -->
            <div class="mt-24">
              {{> accordion accordionItems}}
            </div>
            {{/if}}
          </div>

          <!-- Top vertical spacer: 2rem default (mobile), 4rem LG and above -->
          <div class="mt-32 mt-lg-64">
            {{#if video}}
            <!-- QGDS Video Component -->
            {{> video video}}
            {{/if}}
          </div>

          <!-- Emphasis Container, with top vertical spacer: 2rem default (mobile), 4rem LG and above -->
          <div class="mt-40 mt-lg-64 bg-light content-emphasis">

            <h2 id="inspection">Section heading (H2) with emphasis</h2>

            <p>Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu mauris ac at ultricies est. Tincidunt
              ultrices commodo vestibulum non netus. </p>

            <!-- QGDS Call To Action button -->
            {{> callToAction callToAction}}

          </div>

          <!-- Top vertical spacer: 2rem default (mobile), 4rem LG and above -->
          <div class="mt-32 mt-lg-64">
            <h2 id="inspection">Section heading (H2)</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu mauris ac at ultricies est. Tincidunt
              ultrices commodo vestibulum non netus. </p>

            {{#if table}}
            <!-- QGDS Table Component -->
            <div class="mt-24">
              {{> table table}}
            </div>
            {{/if}}
          </div>

        </main>
        <!-- End Main Content div -->

      </div>
      <!-- End Column (8) -->

    </div>
    <!-- End Row -->


    <!-- Start QGDS Content Footer -->
    <div class="mt-64">
      {{> contentFooter contentFooter}}
    </div>

  </div>

  <!-- Start QGDS Footer -->
  {{> footer footer}}
  <!-- End QGDS Footer -->

</body>


</html>`;var y=`<!-- Content Wrapper -->
<div class="col-12 col-lg-8 ps-lg-64 qld-content-body" id="content">
  {{#if title}}<h1>{{title}}</h1>{{/if}}
  {{> @partial-block }}
</div>
`;var x="";var w=`{{#if customLinks }}
    <ul class="nav footer-link-list footer-link-list--custom flex-column">      
        {{#each customLinks }}
        <li><a class="nav-link" href="{{ link }}" {{#if target }} target="_blank" {{/if}}>{{ label }}</a></li>
        {{/each }}
    </ul>
{{/if}}`;var T=`<!-- QGDS Component: Date input -->

<!-- Label -->
<label id="dategroup-label"
    class="qld-text-input-label {{#if isRequired}}field-required{{/if}} {{#if isDisabled}}field-disabled{{/if}}"
    for="example-1">
    {{label-text}}
    {{#if optional-text}}
    <span class="label-text-optional">({{optional-text}})</span>
    {{/if}}
</label>

<!-- Hint text -->
{{#if hint-text}}
<span class="qld-hint-text" id="example-1-hint">{{hint-text}}</span>
{{/if}}

{{#contains "qld-input-success" customClass}}
<span id="text-field-success" class="qld-input-success">
    {{successMessageText}}
</span>
{{/contains}}

{{#contains "qld-input-error" customClass}}
<span id="text-field-error" class="qld-input-error">
    {{errorMessageText}}
</span>
{{/contains}}

<div aria-labelledby="dategroup-label" role="group" class="row date-container {{customClass}}">
    <!-- day group -->
    <div class="day-group">
        <label for="dayinput" class="date-label qld-text-input-label">Day</label>
        <div>
            <input aria-required="true" aria-labelledby="dategroup-label" placeholder="{{day-placeholder}}" type="text"
                inputmode="numeric" maxlength="2"
                class="qld-text-input form-control dayinput {{customClass}} {{#if isFilled}}form-style-filled{{/if}}" id="dayinput" ref="day"
                aria-invalid="false" {{#if isDisabled}}disabled{{/if}} {{#if isRequired}}required aria-required="true"
                {{/if}}>
        </div>
    </div>
    <!-- month group -->
    <div class="date-group">
        <label for="monthinput" class="date-label qld-text-input-label">Month</label>
        <div>
            <input aria-required="true" aria-labelledby="dategroup-label" placeholder="{{month-placeholder}}"
                type="text" inputmode="numeric" maxlength="2"
                class="qld-text-input form-control monthinput {{customClass}} {{#if isFilled}}form-style-filled{{/if}}" id="monthinput" ref="month"
                aria-invalid="false" {{#if isDisabled}}disabled{{/if}} {{#if isRequired}}required aria-required="true"
                {{/if}}>
        </div>
    </div>
    <!-- year group -->
    <div class="date-group">
        <label for="yearinput" class="date-label">Year</label>
        <div class="year-label">
            <input aria-required="true" aria-labelledby="dategroup-label qld-text-input-label"
                placeholder="{{year-placeholder}}" type="text" inputmode="numeric" maxlength="4"
                class="qld-text-input form-control yearinput {{customClass}} {{#if isFilled}}form-style-filled{{/if}}"
                id="yearinput" ref="year" aria-invalid="false" {{#if isDisabled}}disabled{{/if}} {{#if
                isRequired}}required aria-required="true" {{/if}}>
        </div>
    </div>
</div>
`;var S=`{{! valid class values are: up, down, left, right}}
<a class="qld-dir-link {{class}}" 
    {{~#if id}} id="{{id}}" {{/if~}} 
    href="{{href}}" 
    {{~#if target}} target="{{target}}"{{/if~}}
    {{~#if arialabel}} aria-label="{{arialabel}}" {{/if~}}>
  {{{label}}}
  {{!-- <span class="icon" aria-hidden="true"></span> --}}
  <span class="qld-icon qld-icon-md qld-icon-arrow-{{class}}" aria-hidden="true"></span>
</a>`;var A=`<div class="col-12 col-md-6 col-lg-12">
        <!-- <h3 class="footer-heading">{{#if feedbackForm.title}}{{feedbackForm.title}}{{else}}Website feedback{{/if}}</h3> -->
        <p>{{#if feedbackForm.content}}{{feedbackForm.content}}{{else}}Help us improve the content on our website or tell us what is working well.{{/if}}</p>
    </div>
    <div class="col-12 col-md-6 col-lg-12">
        <div id="qg-feedback-toggle" class="qg-footer-feedback-wrap">
            <a id="btn-footer-feedback" class="btn btn-global-secondary qg-feedback-toggle collapsed" data-bs-toggle="collapse" href="#qg-footer-feedback" role="button" aria-expanded="false" aria-controls="qg-footer-feedback" data-analytics-link-group="qg-feedback">
                {{#if feedbackForm.btnTitle}}{{feedbackForm.btnTitle}}{{else}}Leave your feedback{{/if}}
            </a>
            <div id="qg-footer-feedback" class="qg-footer-feedback__v2 collapse">
                {{#if feedbackForm.formAttr }}<div id="feedbackFormIO" {{#each feedbackForm.formAttr}}{{#if this}}{{@key}}="{{this}}"{{else}}{{@key}}{{/if}} {{/each}}>
                {{else}}
                {{!default if not set}}<div id="feedbackFormIO" data-formio data-formio-project-name="oldkihhcwbdtwye" data-formio-form-name="footerfeedbackcontactus" data-formio-env-url="api.forms.platforms.qld.gov.au" data-formio-createform-options="formioCreateFormOptions" data-formio-createform-controller="formioCreateFormController">
                {{/if}}
                    <div class="qg-spinner" role="status">
                        <div class="spinner-border"></div>
                        <div class="qg-spinner-label">Loading...</div>
                    </div>
                </div>
                <div class="qg-footer-feedback-footer">
                    <a class="qg-footer-feedback__close" data-bs-toggle="collapse" href="#qg-footer-feedback" role="button" aria-label="Close Feedback Form" aria-expanded="true" aria-controls="qg-footer-feedback">Close</a>
                </div>
            </div>
        </div>
    </div>`;var D=`{{#if followLinks }}
    <ul class="nav footer-link-list footer-link-list--social">    
    {{#each followLinks }}
      <li>
          <a  class="nav-link"  href="{{ link }}" {{#if target}}target="{{ target }}"{{/if}}>
              <span class="qld-icon qld-icon-md qld-icon-{{icon}} d-lg-none" aria-hidden="true"></span>
              <span class="qld-icon qld-icon-sm qld-icon-{{icon}} d-none d-lg-block" aria-hidden="true"></span>
              <span class="nav-link-label d-none d-lg-block">{{ label }}</span>
              <span class="sr-only">{{ label }}</span>
          </a>
      </li>
    {{/each }}
    </ul>
{{/if}}`;var P=`<footer class="qld-footer {{ variantClass }}" role="contentinfo">
  <!-- Footer content container -->
  <div class="container">
    {{#if sitename}}
    <div class="row">
      <div class="col title">
        <h2 class="footer-site-name">{{ sitename }}</h2>
      </div>
    </div>
    {{/if}}
    <div class="row">
      
      <!-- Contact us Column -->
      <div class="col-12 col-lg-3 py-24 py-lg-0 footer-contact {{#if contact.hasBorderColumn}}border-column{{/if}}">

        <!-- Inner Grid to manage layout of contact us content -->
        <div class="row ">

          <div class="col col-lg-12">

            <h3 class="footer-heading">
            {{isdefined contact.title 'Contact us' }}
            </h3>

            <div>
            {{{isdefined contact.content '<p>Get in touch for enquiries, feedback, complaints and compliments.</p>' }}}
            </div>
              
          </div><!-- Inner grid col-12  -->

          <div class="col col-lg-12 contact-btn order-lg-last d-flex d-lg-block mt-lg-32 ">
            {{!-- Contact Us Button --}}
            <a href="{{isdefined contact.buttonLink 'https://www.qld.gov.au/contact-us' }}" class="btn btn-outline-secondary">
              {{isdefined contact.buttonLabel 'Contact us' }}
            </a>
          </div><!-- Inner grid col-12  -->  
        
       
          <div class="col-12">
            {{!-- Custom contact list --}}
            {{#ifCond contact.showList "!==" false}}
              {{#ifCond contact.showList "&&" contact.list}}
              {{#each contact.list }}
              <div class="footer-contact-item footer-contact-{{@key}}">
                <span class="qld-icon {{this.icon}}" aria-hidden="true"></span> {{{ this.label }}}
              </div>
              {{/each}}

              {{else}}
              {{!default contact list }}
              <div class="footer-contact-item footer-contact-phone">
                <span class="qld-icon qld-icon-phone" aria-hidden="true"></span> <b>Phone:</b> <a href="tel:137468"
                rel="noopener">13 QGOV (13 74 68)</a>
              </div>

              <div class="footer-contact-item footer-contact-email">
                <span class="qld-icon qld-icon-email" aria-hidden="true"></span> <b>Email:</b> <a
                href="mailto:email@qld.gov.au" rel="noopener"><span class="user-select-all">email@qld.gov.au</span></a>
              </div>
              {{/ifCond}}
            {{/ifCond}}
          </div>
        </div>

      </div><!-- Contact us Column -->


      {{#ifAny optionalColumn1.content optionalColumn1.showFollowLinks optionalColumn1.showCustomLinks }}
      <!-- Optional Column 1 -->
      <div class="col-12 col-lg-2 optional-column-1 {{#if optionalColumn1.hasBorderColumn}}border-column{{/if}}"
        aria-label="{{isdefined optionalColumn1.title 'Footer links' }}">
        
        <div class="footer-column pe-16">
          {{#if optionalColumn1.title}}
            <h3 class="footer-heading">{{optionalColumn1.title}}</h3>
          {{/if}}
          
          <div class="footer-content">
            {{#if optionalColumn1.content}}
              {{{ optionalColumn1.content }}}
            {{/if}}
            
            {{#if optionalColumn1.showFollowLinks}}
              {{> followLinks }}
            {{/if}}
            
            {{#if optionalColumn1.showCustomLinks}}
              {{> customLinks }}
            {{/if}}
          </div>
        </div>

      </div>
      {{/ifAny}}


      <!-- WoG links -->
      <div class="col-12 col-lg-2 {{#if footerLinks.hasBorderColumn}}border-column{{/if}}"
        aria-label="footer-navigation">
        
        <div class="footer-column pe-lg-16">

        {{#if footerLinks}}

          {{#if footerLinks.title}}
          <h3 class="footer-heading">{{footerLinks.title}}</h3>
          {{/if}}
        
          {{!-- <nav class="nav footer-link-list flex-column"> --}}
          <ul class="nav footer-link-list flex-column pt-lg-2">
            {{#each footerLinks.list }}
            <li><a class="nav-link" href="{{ this.link }}" {{#if this.target }}target="{{this.target}}" {{/if}}>{{
                this.label }}</a></li>
            {{/each }}
          </ul>
          {{!-- </nav> --}}

        {{else}}
        {{!default list }}

          <ul class="nav footer-link-list flex-column">
            <li><a class="nav-link" href="https://www.qld.gov.au/help">Help</a></li>
            <li><a class="nav-link" href="https://www.qld.gov.au/legal/copyright">Copyright</a></li>  
            <li><a class="nav-link" href="https://www.qld.gov.au/legal/disclaimer">Disclaimer</a></li>
            <li><a class="nav-link" href="https://www.qld.gov.au/legal/privacy">Privacy</a></li>
            <li><a class="nav-link" href="https://www.qld.gov.au/about/rights-accountability/right-to-information">Right to information</a></li>
            <li><a class="nav-link" href="https://www.qld.gov.au/help/accessibility">Accessibility</a></li>
            <li><a class="nav-link" href="https://smartjobs.qld.gov.au" target="_blank">Jobs in Queensland Government</a></li>
            <li><a class="nav-link" href="https://www.qld.gov.au/help/languages">Other languages</a></li>
          </ul>

        {{/if}}
        
        </div>
      </div>


      {{#ifAny optionalColumn2.content optionalColumn2.showFollowLinks optionalColumn2.showCustomLinks }}
      <!-- Optional Column 2 -->
      <div class="col-12 col-lg-2 optional-column-2 {{#if optionalColumn2.hasBorderColumn}}border-column{{/if}}"
        aria-label="{{isdefined optionalColumn2.title 'Footer links' }}">

        <div class="footer-column pe-lg-16">
          
          {{#if optionalColumn2.title}}
          <h3 class="footer-heading">{{optionalColumn2.title}}</h3>
          {{/if}}


          <div class="footer-content">
          {{#if optionalColumn2.content}}
            {{{ optionalColumn2.content }}}
          {{/if}}
          
          {{#if optionalColumn2.showFollowLinks}}
            {{> followLinks }}
          {{/if}}
          
          {{#if optionalColumn2.showCustomLinks}}
            {{> customLinks }}
          {{/if}}

          </div>
        </div>
      </div>

      {{/ifAny}}

      <!-- Acknowledgement of Country -->
      <div class="col crest">

        <div class="footer-column">

        <div class="footer-content">
          <div class="footer-acknowledgements">
            {{#if acknowledgements }}
              {{#each acknowledgements}}
            
              {{#if title}}
              <h3 class="footer-heading">{{title}}</h3>
              {{/if}}
              
              {{#if content}}
              {{! extra { so it does not html escape }}
              {{{ content }}}
              {{/if}}
              
              {{/each}}
              {{!-- //each acknowledgement --}}
            
            {{else}}
            
              <p>We pay our respects to the Aboriginal and Torres Strait Islander ancestors of this land, their
              spirits and their legacy. The foundations laid by these ancestors\u2014our First Nations peoples\u2014give
              strength, inspiration and courage to current and future generations towards creating a better
              Queensland.</p>

            {{/if}}
          </div>

          {{!-- Footer Logo --}}
          {{#if footerLogo.src}}
          <div class="footer-logo">
            <img src="{{ footerLogo.src }}" alt="{{ footerLogo.alt }}" class="img-fluid" />
          </div>
          
          {{else}}
          
            {{#if footerLogo.show}}
            <div class="footer-crest">
            {{> logoCOALandscape }}
            </div>
            {{/if}}
          
          {{/if}}

          {{!-- Footer Copyright --}}
          {{#if copyright }}
          <p class="copyright">
            {{{copyright.content}}}
            {{#if copyright.showYearFrom}}{{copyright.yearFrom}} - {{/if}} {{formatDateOrToday "" "YYYY" }}
          </p>
          {{else}}
          {{!default }}
          <p class="copyright">\xA9 The State of Queensland {{formatDateOrToday "" "YYYY" }}</p>
          {{/if}}

          {{!-- Organisation Link --}}
          {{#if organisationLink.show }}
          <p>
            <a class="fw-semibold" href="{{isdefined organisationLink.URL 'https://www.qld.gov.au' }}" rel="external">
            {{isdefined organisationLink.text 'Queensland Government' }}
            </a>
          </p>
          {{/if}}

        </div>

        </div>

      </div>
    </div>
  </div>
</footer>`;var O=`  
  {{#if questionLabel}}
  <div class="qld-text-input-label {{listClasses}}">
    {{questionLabel}}
    {{#if optionalLabel}}
    <span class="label-text-optional">{{optionalLabel}}</span>
    {{/if}}
  </div>
  {{/if}}

  {{#if hintLabel}}
  <span class="qld-hint-text">{{hintLabel}}</span>
  {{/if}}
  
  {{#each listitems}}
  <div class="form-check">
    <input class="form-check-input" type="{{type}}" name="{{name}}" id="{{id}}" value="{{value}}" {{#if isDisabled}}disabled{{/if}} {{#if isChecked}}checked{{/if}}>
    <label class="form-check-label" for="{{id}}">
      {{label}}
    </label>
  </div>
  {{/each}}
  `;var R=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  {{> metaDcTerms title=title description=description uri=uri dcTerms=dcTerms }}
  {{> metaOpenGraph title=title description=description uri=uri seo=seo og=og }}
  {{> head }}
</head>
<body>
{{#> mainContainerWrapper }}
  {{> @partial-block }}
{{/mainContainerWrapper}}
</body>
</html>`;var E=`<!-- QGDS Component: Global Alert -->

<div class="global-alert-include">
  {{#each alertItems}}
  <section role="region" class="global-alert alert container-full d-none {{variant}}" data-variant="{{variant}}"
    aria-label="{{ariaLabel}}" {{#if id}} data-id="{{id}}" {{/if}}{{#if dismissedExpiryDays}}
    data-expiry-days="{{dismissedExpiryDays}}" {{/if}}>
    <div class="qld-global-alert-main">
      <div class="global-alert-icon">
        {{#ifCond variant '==' 'global-alert-critical'}}
        <span class="qld-icon qld-icon-sm qld-icon-alert-danger" aria-hidden="true"></span>
        {{else ifCond variant '==' 'global-alert-info'}}
        <span class="qld-icon qld-icon-sm qld-icon-alert-information" aria-hidden="true"></span>
        {{else ifCond variant '==' 'global-alert-warning'}}
        <span class="qld-icon qld-icon-sm qld-icon-alert-warning" aria-hidden="true"></span>
        {{/ifCond}}
      </div>

      <div class="global-alert-content">
        <div class="global-alert-message">
          {{{content}}}
        </div>
        <div class="global-alert-action">
          {{{action}}}
          <span class="qld-icon qld-icon-sm qld-icon-arrow-right" aria-hidden="true"></span>
        </div>
      </div>
      {{#unless preventDismiss}}
      <div class="global-alert-close">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      {{/unless}}
    </div>
  </section>
  {{/each }}
</div>`;var I=`
<!-- VERSION_DETAILS={"project_id":"@qld-gov-au/qgds-bootstrap5","version":"2.0.11","branch":"HEAD","tag":"v2.0.11","commit":"c1bc176e3a8502826203a87dc48aab0bc1bc8770","majorVersion":"v2"} -->

{{! Select environment, used verbatium if not using predefind key
cdn := PROD|STAGING|BETA|TEST|DEV|???
}}

<link rel="stylesheet" href="{{#if cdn }}{{#ifCond cdn '==' 'PROD'}}https://static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'STAGING'}}https://staging-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'BETA'}}https://beta-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'TEST'}}https://test-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'DEV'}}https://dev-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{cdn}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{else}}missing{{/if}}/assets/css/qld.bootstrap.css">

<script type="text/javascript" async src="{{#if cdn }}{{#ifCond cdn '==' 'PROD'}}https://static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'STAGING'}}https://staging-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'BETA'}}https://beta-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'TEST'}}https://test-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'DEV'}}https://dev-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{cdn}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{else}}missing{{/if}}/assets/js/bootstrap.min.js"><\/script>
<script type="text/javascript" async src="{{#if cdn }}{{#ifCond cdn '==' 'PROD'}}https://static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'STAGING'}}https://staging-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'BETA'}}https://beta-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'TEST'}}https://test-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{#ifCond cdn '==' 'DEV'}}https://dev-static.qgov.net.au/qgds-bootstrap5/v2/v2.x.x-latest{{else}}{{cdn}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{/ifCond}}{{else}}missing{{/if}}/assets/js/qld.bootstrap.min.js"><\/script>
`;var _=`<header class="qld-header " role="banner">
    <div class="qld-header-pre-header {{#ifCond preHeader.palette "===" "dark"}}dark{{else}}{{#ifCond
        preHeader.palette "===" "default" }}default{{else}}{{#ifCond preHeader.palette "===" "dark-alt"
        }}dark-alt{{else}}default{{/ifCond}}{{/ifCond}}{{/ifCond}}">
        <div class="container">
            <div class="d-flex justify-content-between">

                <a class="qld-header-link align-self-center"
                    href="{{#if preHeader.globalLink.url}}{{preHeader.globalLink.url}}{{else}}https://qld.gov.au{{/if}}">
                    <span class="d-none d-lg-inline">{{preHeader.globalLink.text}}</span>
                    {{#if hasDeliveringForQLDLogo}}
                    {{>logo logo="coa-delivering-for-qld" className="qld-header-logo is-delivering-for-qld" fill="currentColor"}}
                    {{else}}
                    {{>logo className="qld-header-logo" fill="currentColor"}}
                    {{/if}}
                </a>

                {{#if preHeader.actions}}
                <div class="d-none d-lg-flex align-items-baseline">
                    {{#each preHeader.actions}}
                    {{#if dropdown}}
                    <div class="dropdown">
                        <a id="dropdown{{id}}" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                            class="qld-header-link dropdown-toggle" href="#">
                            {{{text}}}
                        </a>

                        {{#ifCond dropdown.type "===" "list"}}
                        <ul class="dropdown-menu dropdown-menu-end">

                            {{#each dropdown.items}}
                            <li>
                                <a class="qld-header-link dropdown-item " href="{{url}}" {{#if
                                    target}}target="{{target}}" {{/if}}>
                                    {{text}}
                                </a>
                            </li>
                            {{/each}}

                            {{#if dropdown.viewMore}}
                            <li>
                                <a href="{{dropdown.viewMore.url}}" {{#if
                                    dropdown.viewMore.target}}target="{{dropdown.viewMore.target}}" {{/if}}
                                    class="qld-header-link dropdown-item border-bottom-0">
                                    {{dropdown.viewMore.text}}
                                </a>
                            </li>
                            {{/if}}

                        </ul>
                        {{/ifCond}}

                        {{#ifCond dropdown.type "in" "html, form"}}
                        <div class="dropdown-menu dropdown-menu-end">
                            {{{dropdown.HTMLContent}}}
                        </div>
                        {{/ifCond}}

                    </div>
                    {{else}}

                    <a class="qld-header-link ms-16" href="{{url}}">
                        {{#if icon}}
                        <span class="qld-icon qld-icon-{{icon}} qld-icon-sm qld-header-link-icon"
                            aria-hidden="true"></span>
                        {{/if}}{{{text}}}
                    </a>
                    {{/if}}
                    {{/each}}
                </div>
                {{/if}}

                <div class="qld-header-mobile-controls">
                    {{#if assets.siteSearch.value}}
                    <button id="qld-header-toggle-search-button" aria-controls="qld-header-search"
                        class="qld-header-mobile-button is-search-toggle" aria-expanded="false"
                        aria-label="Open search">Search</button>
                    {{/if}}

                    <button id="burgerBtn" class="qld-header-mobile-button is-menu-toggle" data-bs-toggle="collapse"
                        data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                        aria-label="Open menu">Menu</button>
                </div>
            </div>

        </div>
    </div>

    <div class="qld-header-main {{#ifCond mainContent.palette "===" "dark"}}dark{{else ifCond
        mainContent.palette "===" "default" }}default{{else ifCond mainContent.palette "===" "dark-alt"
        }}dark-alt{{else}}default{{/ifCond}}">
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    {{#ifAny isMasterBrand isSubBrand isCoBrand}}
                    {{>headerBrand
                    hasDeliveringForQLDLogo=hasDeliveringForQLDLogo
                    url=mainContent.url
                    logo=mainContent.logo
                    siteTitle=mainContent.siteTitle
                    subline=mainContent.subline }}
                    {{/ifAny}}

                    {{#ifAny isEndorsedBrand isStandaloneBrand }}
                    {{>headerBrand
                    hasDeliveringForQLDLogo=hasDeliveringForQLDLogo
                    url=mainContent.url
                    logo=mainContent.logo
                    siteTitle=mainContent.siteTitle
                    secondaryLogo=mainContent.secondaryLogo
                    subline=mainContent.subline }}
                    {{/ifAny}}
                </div>

                {{#if assets.siteSearch.value}}
                <div class="col-lg-4">
                    <div id="qld-header-search" class="qld-header-site-search is-closed">
                        <form class="site-search" role="search" {{#if assets.siteSearch.formAction.url}}
                            action="{{assets.siteSearch.formAction.url}}" {{else}}
                            action="https://www.qld.gov.au/search" {{/if}}>
                            {{{ searchInput }}}
                        </form>
                    </div>
                </div>
                {{/if}}
            </div>
        </div>
    </div>
</header>`;var N=`
<div class="qld-header-brand">
    <a class="qld-header-link d-lg-inline-flex align-middle" href="{{url}}">
        <div class="qld-header-brand-image align-self-center">
            {{#if logo}}
            <img src="{{logo.src}}" height="56" alt="{{#if logo.altText}}{{logo.altText}}{{else}}Queensland government{{/if}}" />
            {{else if siteTitle}}
            {{>logo logo="coa-landscape-2lines" height="56" className="qld-header-logo" fill="currentColor"}}
            {{else if hasDeliveringForQLDLogo}}
            {{>logo logo="coa-delivering-for-qld" height="56" className="qld-header-logo is-delivering-for-qld" fill="currentColor"}}
            {{else}}
            {{>logo height="56" className="qld-header-logo"  fill="currentColor"}}
            {{/if}}
        </div>
        {{#if secondaryLogo}}
        <div class="qld-header-secondary-content">
            <img src="{{secondaryLogo.src}}" class="qld-header-secondary-image qld-header-logo" height="56" alt="{{#if secondaryLogo.altText}}{{secondaryLogo.altText}}{{else}}{{siteTitle}}{{#if subline}}{{subline}}{{/if}}{{/if}}" />
        </div>
        {{else}}
        {{#if siteTitle}}
        <div class="qld-header-secondary-content">
            <span class="qld-header-site-title">
                {{siteTitle}}
            </span>
            {{#if subline}}
            <span class="qld-header-subline">
                {{subline}}
            </span>
            {{/if}}
        </div>
        {{/if}}
        {{/if}}
    </a>
</div>    
`;var F=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
</head>

<body>
    {{> globalAlert globalAlert}}
    {{> header header}}
    {{> navbar navbar}}

    {{#if banner}}
    {{> banner banner}}
    {{/if}}

    <main>
        <div class="container-fluid p-0">
            {{#if cardGrid}}
            <section class="py-5 mt-md-3">
                <div class="container">
                    <div class="row">
                        {{#each cardGrid.cards}}
                        <div class="col-md-4 mb-4">
                            {{> card this}}
                        </div>
                        {{/each}}
                    </div>
                </div>
            </section>
            {{/if}}

            {{#if linkColumns}}
            <section class="py-5">
                <div class="container">
                    {{> linkColumns linkColumns}}
                </div>
            </section>
            {{/if}}

            <section class="py-5 mt-md-3 bg-light">
                <div class="container">
                    <h2 id="content-heading">Section heading (H2)</h2>

                    <div class="row">
                        <div class="col-md-4 mb-4">
                            <h3 id="inspection">Content heading (H3)</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu mauris ac at ultricies
                                est.
                                Tincidunt ultrices commodo vestibulum non netus. </p>
                            <p>Mauris maecenas lacus hendrerit urna ultricies auctor. Sed tristique nascetur sapien
                                condimentum adipiscing augue quisque eu.</p>

                            {{> callToAction callToAction}}
                        </div>

                        <div class="col-md-4 mb-4">
                            <h3 id="inspection">Content heading (H3)</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu mauris ac at ultricies
                                est.
                                Tincidunt ultrices commodo vestibulum non netus. </p>
                            <p>Mauris maecenas lacus hendrerit urna ultricies auctor. Sed tristique nascetur sapien
                                condimentum adipiscing augue quisque eu.</p>

                            {{> callToAction callToAction}}
                        </div>

                        <div class="col-md-4 mb-4">
                            <h3 id="inspection">Content heading (H3)</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Viverra eu pulvinar a eu mauris ac at ultricies
                                est.
                                Tincidunt ultrices commodo vestibulum non netus. </p>
                            <p>Mauris maecenas lacus hendrerit urna ultricies auctor. Sed tristique nascetur sapien
                                condimentum adipiscing augue quisque eu.</p>

                            {{> callToAction callToAction}}
                        </div>
                    </div>
                </div>
            </section>

            {{#if promotionalPanel}}
            <section class="pt-5 bg-light">
                <div class="container is-extended">
                    {{> promotionalPanel promotionalPanel}}
                </div>
            </section>
            {{/if}}

            {{#if cardGridBottom}}
            <section class="py-64 dark-alt">
                <div class="container pt-64">
                    <div class="row">
                        {{#each cardGridBottom.cards}}
                        <div class="col-md-4 mb-4">
                            {{> card this}}
                        </div>
                        {{/each}}
                    </div>
                </div>
            </section>
            {{/if}}

        </div>
    </main>
    {{> footer footer}}
</body>

</html>`;var G=`<svg class="qld-icon-{{size}}"{{#if ariaLabel}} aria-label="{{ariaLabel}}"{{/if}}{{#if ariaHidden}} aria-hidden="{{ariaHidden}}"{{/if}}>
  <use href="./assets/img/icons-sprite.svg#qgds-icon-{{iconId}}"></use>
</svg>`;var Q=`{{! Image template }}
{{#*inline "imageTag"}}
  <img class="{{ ratioClass }} {{ otherClass }} {{ positionX }} {{ positionY }}"
    src="{{ src }}"
    alt="{{ alt }}"
    {{~#if width}} width="{{ width }}{{ widthUnit }}"{{/if~}}
    {{~#if height}} height="{{ height }}{{ heightUnit }}"{{/if~}}
    {{~#if lazy}} loading="lazy"{{/if~}}
    {{~#if style}} style="{{ style }}"{{/if~}}
    {{~#if tabindex}} tabindex="{{ tabindex }}"{{/if~}}
    {{~#if role}} role="{{ role }}"{{/if~}}
  />
{{/inline}}

{{#if src}}
  {{#ifAny caption credit }}
    <figure class="{{ figureClass }}" {{#if width}}style="width:{{ width }}{{ widthUnit }}"{{/if}}>
      {{> imageTag}}
      <figcaption>
        {{caption}}
        {{#if credit}}<span class="figure-credit">{{ credit }}</span>{{/if}}
      </figcaption>
    </figure>
  {{else}}
    {{>imageTag}}
  {{/ifAny}}
{{/if}}
`;var B=`<div class="alert {{variantClass}} {{customClass}}" role="alert" 
    {{#if alertType}}aria-label="{{alertType}}"{{/if}}>
    {{#if heading}}
        {{#if headingTag}}
            <{{headingTag}} class="alert-heading">{{{ heading }}}</{{headingTag}}>
        {{else}}
            <h2 class="alert-heading">{{{ heading }}}</h2>
        {{/if}}
    {{/if}}
    {{{ content }}}
</div>`;var j=`<!-- QGDS Partial: inpage-nav -->

<div class="qld-inpage-nav">

    <h2 class="nav-title">{{navtitle}}</h2>

    <ul class="nav">
        {{#each navitems}}
        <li class="nav-item">
            <a class="nav-link" href="#{{linkid}}">{{linktext}}</a>
        </li>
        {{/each}}
    </ul>

</div>`;var W=`{{!-- Link icon partial --}}
{{#*inline "linkIcon"~}}
<span class="qld-icon qld-icon-md {{iconClass}} {{iconPosition}}" aria-hidden="true"></span>
{{~/inline}} 

{{#*inline "link"~}}
<a class="link" {{#if id}}id="{{id}}"{{/if}}
    href="{{url}}" 
    target="{{target}}" 
    {{#if arialabel}}aria-label="{{arialabel}}"{{/if}} 
    {{#if download}}download="{{download}}"{{/if}} 
    >
 {{#if iconClass~}}
    {{#ifCond iconPosition '==' 'leading'}}
      {{~> linkIcon~}}
    {{/ifCond}}
  {{/if}}

    {{label}}

  {{#if iconClass~}}
    {{#ifCond iconPosition '==' 'trailing'}}
      {{~> linkIcon~}}
    {{/ifCond}}
  {{/if}}
  
</a>
{{~/inline}} 

{{#if linkList~}}
<ul class="link-list">
    {{#each linkList}}
      <li class="link-item">
        {{~> link~}}
      </li>
    {{/each}}
</ul>
        
{{else}}
    {{~> link~}}
{{/if}}`;var J=`{{#if data}}
    <section class="link-column {{theme}}">
        <ul class="nav {{#if items_flow_vert}}col-vert-{{columns}}{{else}}col-{{columns}}{{/if}}">
            {{#ifCond items_flow '==' 'horizontal'}}
                <li class="nav-item all-link">
                    {{> callToAction 
                        label=(isdefined all_link.value "View all")
                        href=all_link.url 
                        target=all_link.target 
                        class=all_link.class 
                        arialabel=all_link.value 
                        id=all_link.id}}
                </li>
            {{/ifCond}}
            {{> linkColBase data}}
        </ul>
    </section>
{{else}}
    <section class="link-column {{theme}}">
        <!-- There are no items available -->
    </section>
{{/if}}


{{#*inline "linkColBase"}}              
    {{#each items}}
        {{> navItem}}
    {{/each}}
    {{#if all_link}}
        <li class="nav-item all-link">
            {{> callToAction 
                label=(isdefined all_link.value "View all")
                href=all_link.url 
                target=all_link.target 
                class=all_link.class 
                arialabel=all_link.value 
                id=all_link.id}}
        </li>
    {{/if}}
{{/inline}}

{{#*inline "navItem"}}
    <li class="nav-item">
        <a class="nav-link"{{~#if id}} id="{{id}}"{{/if~}}{{~#if target}} target="{{target}}"{{/if~}} href="{{url}}">
            {{~{value}~}}
        </a>
    </li>
{{/inline}}`;var Y=`{{#ifCond logo "===" "coa-landscape"}}
    {{>logoCOALandscape}}
{{else ifCond logo "===" "coa-landscape-2lines"}}
    {{>logoCOALandscape2Lines}}
{{else ifCond logo "===" "coa-delivering-for-qld"}}
    {{>logoCOADeliveringForQLD}}
{{else}}
    {{>logoCOALandscape}}
{{/ifCond}}
`;var U=`
<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 331 56" {{#if fill}}fill="{{fill}}"{{/if}} {{#if className}}class="{{className}}"{{/if}} {{#if width}}width="{{width}}"{{/if}} {{#if height}}height="{{height}}"{{/if}}>
<title>Delivering for Queensland - Queensland Government</title>
<path d="M238.286 30.0605C237.637 30.0605 237.017 29.7782 236.481 29.4395C236.142 29.2419 235.578 28.8468 235.183 28.7056C236.932 27.5484 238.061 25.1774 238.061 22.0161C238.061 17.4436 235.663 14.621 231.799 14.621C230.699 14.621 229.627 14.875 228.781 15.3266C226.693 16.4556 225.481 18.996 225.481 22.1573C225.481 24.3024 226.045 26.1371 227.145 27.5766C228.245 29.0161 229.683 29.6371 231.855 29.6371C232.983 30.004 234.112 30.6532 234.817 31.1048C235.353 31.4718 236.368 32.121 237.496 32.121C238.371 32.121 238.794 31.8669 238.794 31.8669L239.555 29.9476C239.555 29.9476 238.878 30.0605 238.258 30.0605H238.286ZM231.799 27.379C231.094 27.379 230.529 27.2097 230.05 26.871C229.176 26.25 228.752 24.6694 228.752 22.1573C228.752 20.4073 228.978 19.1089 229.486 18.1774C229.909 17.4153 230.755 16.9073 231.742 16.9073C233.294 16.9073 234.055 18.0081 234.309 18.7419C234.563 19.5605 234.676 20.6331 234.676 22.129C234.676 25.8548 233.83 27.4073 231.771 27.4073L231.799 27.379Z" />
<path d="M240.486 27.9153C240.317 27.4355 240.261 26.871 240.261 25.7702V18.8831L243.025 18.3468V25.2339C243.025 26.1935 243.109 26.7016 243.25 26.9839C243.391 27.2661 243.815 27.4919 244.238 27.4919C244.943 27.4919 245.761 26.9839 245.986 26.4758V18.9113L248.666 18.3468V26.5605C248.666 27.2661 248.892 28 249.315 28.5081L247.312 29.6371C246.945 29.3831 246.663 29.0161 246.466 28.5927C245.761 29.2702 244.774 29.6089 243.645 29.6089C242.122 29.6089 240.825 28.9032 240.486 27.8589V27.9153Z" />
<path d="M260.202 24.8952V24.246C260.202 22.0161 259.751 20.5484 258.764 19.5605C258.059 18.8548 256.902 18.4315 255.661 18.4315C254.223 18.4315 253.179 18.8831 252.276 19.871C251.346 20.9153 250.923 22.1855 250.923 24.1331C250.923 27.5202 252.925 29.6936 256 29.6936C257.495 29.6936 258.82 29.2137 260.033 28.1976L258.933 26.5323C258.087 27.2379 257.184 27.6048 256.197 27.6048C254.759 27.6048 253.941 26.6734 253.941 25.0081V24.9234H260.146L260.202 24.8952ZM254.025 22.8065C254.025 21.3105 254.646 20.4919 255.689 20.4919C256.254 20.4919 256.648 20.6895 256.93 21.1129C257.184 21.5081 257.269 21.9315 257.269 22.7218V22.8347H254.025V22.7782V22.8065Z" />
<path d="M270.78 24.8952V24.246C270.78 22.0161 270.328 20.5484 269.341 19.5605C268.636 18.8548 267.48 18.4315 266.239 18.4315C264.8 18.4315 263.756 18.8831 262.854 19.871C261.923 20.9153 261.5 22.1855 261.5 24.1331C261.5 27.5202 263.503 29.6936 266.577 29.6936C268.072 29.6936 269.398 29.2137 270.61 28.1976L269.51 26.5323C268.664 27.2379 267.762 27.6048 266.774 27.6048C265.336 27.6048 264.518 26.6734 264.518 25.0081V24.9234H270.723L270.78 24.8952ZM264.631 22.8065C264.631 21.3105 265.251 20.4919 266.295 20.4919C266.859 20.4919 267.254 20.6895 267.536 21.1129C267.79 21.5081 267.874 21.9315 267.874 22.7218V22.8347H264.631V22.7782V22.8065Z" />
<path d="M272.754 21.621C272.754 20.6895 272.641 19.8145 272.387 19.1089L274.87 18.4032C275.123 18.8548 275.264 19.3065 275.264 19.7581C275.688 19.4758 276.026 19.2218 276.506 18.9677C277.07 18.6855 277.803 18.5161 278.424 18.5161C279.608 18.5161 280.652 19.1371 280.99 20.0686C281.131 20.4637 281.188 20.9153 281.188 21.5927V29.4395H278.424V22.4677C278.424 21.254 278.226 20.8871 277.493 20.8871C276.929 20.8871 276.195 21.254 275.547 21.8468V29.4395H272.726V21.6492L272.754 21.621Z" />
<path d="M287.337 29.7218C286.011 29.7218 284.573 29.2984 282.993 28.4798L284.008 26.4194C284.855 26.9556 286.35 27.6331 287.562 27.6331C288.352 27.6331 289.001 27.0968 289.001 26.4194C289.001 25.6855 288.465 25.3185 287.337 25.0927L286.068 24.8669C285.362 24.754 284.46 24.246 284.093 23.7661C283.726 23.3145 283.473 22.5242 283.473 21.8468C283.473 19.7581 285.137 18.3468 287.619 18.3468C289.339 18.3468 290.468 18.8831 291.455 19.3629L290.524 21.254C289.452 20.7177 288.691 20.4919 287.873 20.4919C287.055 20.4919 286.519 20.9153 286.519 21.5363C286.519 22.0726 286.885 22.3831 287.873 22.6371L289.17 22.9758C290.496 23.3145 290.919 23.7097 291.314 24.1895C291.709 24.6976 291.906 25.2903 291.906 26.0242C291.906 28.254 290.073 29.75 287.309 29.75L287.337 29.7218Z" />
<path d="M293.909 17.754C293.909 16.3427 293.881 15.496 293.768 14.5363L296.645 13.8871C296.758 14.4798 296.786 15.1572 296.786 16.6814V25.0363C296.786 26.871 296.786 27.125 296.983 27.4355C297.096 27.6331 297.322 27.7177 297.547 27.7177C297.66 27.7177 297.717 27.7177 297.858 27.6895L298.337 29.3548C297.858 29.5524 297.265 29.6371 296.673 29.6371C295.488 29.6371 294.501 29.0726 294.191 28.1693C293.993 27.6331 293.937 27.2943 293.937 25.7701V17.754H293.909Z" />
<path d="M307.448 25.8266L307.504 22.2137C307.504 21.0565 307.448 20.7177 307.307 20.2944C306.884 19.1089 305.643 18.4315 303.837 18.4315C302.85 18.4315 301.948 18.629 300.904 19.0524C300.142 19.3629 299.719 19.5887 299.155 19.9274L300.34 21.9315C301.496 21.1694 302.54 20.7177 303.443 20.7177C304.458 20.7177 304.712 21.1129 304.712 22.2984V22.75C304.486 22.75 304.289 22.75 304.091 22.75C300.678 22.75 298.93 23.9355 298.93 26.4476C298.93 28.5927 300.227 29.8065 302.625 29.8065C303.499 29.8065 304.261 29.6089 304.796 29.2137C304.994 29.0726 305.248 28.8468 305.445 28.6492C305.727 29.1855 306.291 29.6653 306.968 29.9476L308.463 28.2258C307.532 27.5202 307.448 27.0121 307.448 25.8266ZM304.655 27.0121C304.232 27.4637 303.725 27.746 303.189 27.746C302.484 27.746 301.948 27.1815 301.948 26.3347C301.948 25.0645 302.625 24.6976 304.571 24.6976H304.684L304.627 27.0121H304.655Z" />
<path d="M315.176 20.8306C314.612 20.8306 313.879 21.1976 313.23 21.7903V29.3831H310.409V21.5927C310.409 20.6613 310.297 19.7863 310.043 19.0806L312.525 18.375C312.779 18.8266 312.92 19.2782 312.92 19.7298C313.343 19.4476 313.681 19.1935 314.161 18.9395C314.725 18.6573 315.458 18.4879 316.079 18.4879C317.264 18.4879 318.307 19.1089 318.646 20.0403C318.787 20.4355 318.843 20.8871 318.843 21.5645V29.4113H316.079V22.4395C316.079 21.2258 315.881 20.8589 315.148 20.8589L315.176 20.8306Z" />
<path d="M330.379 25.4597V14.3105L327.587 13.8589V17.5564C327.587 18.1774 327.615 18.9113 327.672 19.1371C327.136 18.7137 326.543 18.5161 325.754 18.5161C323.018 18.5161 321.156 20.8306 321.156 24.1895C321.156 27.5484 322.877 29.6371 325.613 29.6371C326.572 29.6371 327.39 29.3548 328.095 28.7339C328.123 29.0161 328.179 29.1855 328.264 29.3548H330.774C330.577 28.9314 330.379 28.0847 330.379 25.4314V25.4597ZM327.644 26.6169C327.361 26.9556 326.797 27.3226 326.261 27.3226C324.795 27.3226 324.315 26.5605 324.315 24.2742C324.315 21.9879 324.851 20.8306 326.12 20.8306C326.628 20.8306 327.136 21.0564 327.644 21.5363V26.6451V26.6169Z" />
<path d="M231.319 42.1129H236.171V48.8306C235.155 49.508 233.604 49.9314 232.137 49.9314C230.332 49.9314 228.809 49.3105 227.709 48.125C226.496 46.7984 225.932 45.0201 225.932 42.5363C225.932 39.7984 226.665 37.8508 228.16 36.496C229.176 35.5645 230.417 35.1411 231.912 35.1411C233.406 35.1411 234.76 35.621 235.86 36.5806L235.071 37.6532C233.886 36.8629 233.068 36.5524 231.94 36.5524C230.276 36.5524 228.95 37.3145 228.358 38.9798C227.991 40.0524 227.793 41.2661 227.793 42.621C227.793 44.5121 228.16 46.0363 228.809 46.996C229.458 47.9274 230.924 48.5201 232.278 48.5201C233.181 48.5201 233.942 48.3226 234.563 47.9556V43.5806H231.658L231.319 42.1411V42.1129Z" />
<path d="M247.002 40.758C246.297 39.7419 245.168 38.9234 243.42 38.9234C240.684 38.9234 238.963 41.0121 238.963 44.3992C238.963 47.7863 240.599 49.9597 243.476 49.9597C246.099 49.9597 247.961 48.125 247.961 44.625C247.961 42.9314 247.651 41.6895 247.002 40.758ZM245.789 47.0242C245.422 48.0403 244.604 48.6048 243.533 48.6048C242.63 48.6048 241.784 48.1814 241.417 47.5605C241.022 46.9113 240.768 45.6129 240.768 44.1451C240.768 42.9032 240.938 42.0564 241.276 41.4072C241.643 40.7016 242.489 40.2782 243.42 40.2782C244.266 40.2782 245.197 40.7016 245.648 41.633C245.986 42.3387 246.127 43.2984 246.127 44.7661C246.127 45.7822 246.043 46.375 245.817 47.0242H245.789Z" />
<path d="M256.648 39.2621H258.397L254.477 49.8185H252.869L249.117 39.3468L250.782 38.9798L253.207 46.1774C253.489 47.0242 253.715 47.9556 253.715 47.9556H253.771C253.771 47.9556 253.941 47.1371 254.279 46.2056L256.677 39.2621H256.648Z" />
<path d="M268.157 44.7379V44.5121C268.157 42.0282 267.874 41.0403 266.972 40.1089C266.267 39.375 265.28 38.9798 264.151 38.9798C262.882 38.9798 261.867 39.4314 261.02 40.4193C260.146 41.4637 259.751 42.5927 259.751 44.371C259.751 47.8427 261.5 49.9314 264.377 49.9314C265.731 49.9314 266.972 49.4798 267.903 48.6331L267.282 47.5887C266.549 48.2661 265.731 48.5766 264.715 48.5766C263.7 48.5766 262.713 48.2097 262.12 47.3064C261.754 46.7701 261.641 46.0081 261.641 45.0201V44.7661H268.157V44.7379ZM264.038 40.25C264.828 40.25 265.562 40.6169 265.928 41.1814C266.239 41.6895 266.38 42.3669 266.408 43.496H261.641C261.726 41.3226 262.572 40.25 264.038 40.25Z" />
<path d="M275.631 38.9234C275.913 38.9234 276.195 39.0363 276.195 39.0363L275.518 40.8145C275.518 40.8145 275.236 40.7298 275.067 40.7298C274.447 40.7298 273.798 41.0121 273.318 41.4919C272.839 41.9718 272.698 42.2822 272.698 43.1572V49.7056H271.062V41.6613C271.062 40.1371 270.695 39.4314 270.695 39.4314L272.331 38.9798C272.331 38.9798 272.726 39.7984 272.67 40.6734C273.431 39.6008 274.531 38.9234 275.603 38.9234H275.631Z" />
<path d="M285.165 40.5605C285.334 40.9274 285.419 41.3508 285.419 41.7742V49.7056H283.755V42.6492C283.755 41.5484 283.67 41.2661 283.388 40.8992C283.162 40.6169 282.711 40.4476 282.231 40.4476C281.385 40.4476 280.088 41.125 279.326 41.9153V49.7056H277.747V41.6613C277.747 40.1653 277.352 39.4597 277.352 39.4597L278.931 39.0081C278.931 39.0081 279.298 39.7984 279.298 40.6452C280.398 39.5443 281.47 39.0363 282.598 39.0363C283.726 39.0363 284.742 39.6573 285.165 40.5605Z" />
<path d="M301.694 41.8024V49.6774H300.03V41.9718C300.03 40.9556 299.578 40.4476 298.676 40.4476C297.745 40.4476 297.012 41.0685 295.911 42.0564V49.7056H294.247V42.2822C294.247 41.6613 294.191 41.2379 293.965 40.9274C293.711 40.6451 293.373 40.504 292.893 40.504C292.104 40.504 291.314 40.8992 290.242 41.8871V49.6774H288.662V41.5766C288.662 40.0524 288.296 39.3468 288.296 39.3468L289.875 38.9798C289.875 38.9798 290.242 39.7984 290.242 40.5322C290.947 39.7701 292.216 38.9516 293.288 38.9516C294.36 38.9516 295.347 39.5726 295.714 40.7016C296.729 39.629 297.999 38.9516 299.071 38.9516C300.622 38.9516 301.694 40.1371 301.694 41.7742V41.8024Z" />
<path d="M312.694 44.7379V44.5121C312.694 42.0282 312.412 41.0403 311.51 40.1089C310.804 39.375 309.817 38.9798 308.689 38.9798C307.42 38.9798 306.404 39.4314 305.558 40.4193C304.684 41.4637 304.289 42.5927 304.289 44.371C304.289 47.8427 306.037 49.9314 308.915 49.9314C310.268 49.9314 311.509 49.4798 312.44 48.6331L311.82 47.5887C311.086 48.2661 310.268 48.5766 309.253 48.5766C308.238 48.5766 307.25 48.2097 306.658 47.3064C306.291 46.7701 306.179 46.0081 306.179 45.0201V44.7661H312.694V44.7379ZM308.604 40.25C309.394 40.25 310.127 40.6169 310.494 41.1814C310.804 41.6895 310.945 42.3669 310.974 43.496H306.207C306.291 41.3226 307.138 40.25 308.604 40.25Z" />
<path d="M323.046 40.5605C323.215 40.9274 323.3 41.3508 323.3 41.7742V49.7056H321.636V42.6492C321.636 41.5484 321.551 41.2661 321.269 40.8992C321.043 40.6169 320.592 40.4476 320.112 40.4476C319.266 40.4476 317.969 41.125 317.207 41.9153V49.7056H315.628V41.6613C315.628 40.1653 315.233 39.4597 315.233 39.4597L316.812 39.0081C316.812 39.0081 317.179 39.7984 317.179 40.6452C318.279 39.5443 319.351 39.0363 320.479 39.0363C321.607 39.0363 322.623 39.6573 323.046 40.5605Z" />
<path d="M330.52 48.5484L330.746 49.5927C330.21 49.875 329.646 50.0161 328.913 50.0161C328.377 50.0161 327.954 49.9032 327.559 49.7339C326.825 49.3669 326.543 48.7177 326.543 47.6452V40.4758H325.19V39.2339H326.543C326.543 38.2177 326.713 36.5807 326.713 36.5807L328.433 36.2137C328.433 36.2137 328.236 37.8508 328.236 39.2339H330.859L330.351 40.4758H328.179V47.2218C328.179 48.379 328.49 48.7742 329.533 48.7742C329.985 48.7742 330.267 48.7177 330.549 48.5766L330.52 48.5484Z" />
<path d="M173.779 54.4758H174.032H174.061C174.061 54.4758 174.061 54.4758 174.032 54.4758H174.004C174.004 54.4758 173.92 54.4758 173.92 54.3911C173.92 54.3911 173.92 54.3064 173.948 54.25L174.004 54.1089H174.681L174.794 54.3911V54.4476H174.766C174.766 54.4476 174.794 54.4476 174.85 54.4476H175.302H175.414C175.414 54.4476 175.358 54.4476 175.302 54.4476C175.245 54.4476 175.189 54.4193 175.104 54.1935C174.963 53.8266 174.568 52.8951 174.54 52.754C174.54 52.6976 174.512 52.6693 174.484 52.6693C174.484 52.6693 174.455 52.6976 174.427 52.754L173.835 54.2218C173.835 54.2218 173.75 54.4193 173.637 54.4193C173.637 54.4193 173.581 54.4193 173.553 54.4193C173.553 54.4193 173.553 54.4193 173.609 54.4193H173.891L173.779 54.4758ZM174.314 53.1492L174.596 53.9395H174.004L174.286 53.1492H174.314Z" />
<path d="M175.725 52.754C175.725 52.754 175.838 52.8105 175.838 52.8952C175.838 52.9798 175.838 53.0363 175.838 53.375V53.7137C175.838 54.0524 175.922 54.2218 176.035 54.3347C176.204 54.4758 176.43 54.504 176.543 54.504C176.684 54.504 176.881 54.504 177.022 54.3347C177.22 54.1653 177.248 53.8831 177.248 53.629V53.375C177.248 53.0363 177.248 52.9516 177.248 52.8952C177.248 52.8105 177.248 52.7823 177.332 52.754C177.361 52.754 177.389 52.754 177.389 52.754H177.417C177.417 52.754 177.417 52.754 177.361 52.754C177.276 52.754 177.135 52.754 177.107 52.754C177.107 52.754 176.966 52.754 176.853 52.754C176.825 52.754 176.797 52.754 176.797 52.754C176.797 52.754 176.797 52.754 176.853 52.754C176.853 52.754 176.909 52.754 176.938 52.754C177.022 52.754 177.022 52.8105 177.022 52.8952C177.022 52.9798 177.022 53.0363 177.022 53.375V53.6573C177.022 53.9113 177.022 54.1089 176.881 54.25C176.797 54.3347 176.656 54.3629 176.571 54.3629C176.486 54.3629 176.373 54.3629 176.289 54.2782C176.176 54.1935 176.091 54.0242 176.091 53.7137V53.375C176.091 53.0363 176.091 52.9516 176.091 52.8952C176.091 52.8105 176.091 52.7823 176.176 52.754C176.204 52.754 176.232 52.754 176.232 52.754H176.261C176.261 52.754 176.261 52.754 176.204 52.754C176.12 52.754 175.979 52.754 175.922 52.754C175.866 52.754 175.697 52.754 175.584 52.754C175.555 52.754 175.527 52.754 175.527 52.754C175.527 52.754 175.527 52.754 175.584 52.754C175.612 52.754 175.668 52.754 175.668 52.754H175.725Z" />
<path d="M178.15 52.754C178.15 52.754 178.235 52.8105 178.235 52.8952C178.235 52.9799 178.235 53.0363 178.235 53.375V53.7984C178.235 54.0242 178.235 54.1936 178.235 54.3065C178.235 54.3629 178.235 54.4194 178.179 54.4194C178.179 54.4194 178.122 54.4194 178.094 54.4194C178.066 54.4194 178.066 54.4194 178.066 54.4194C178.066 54.4194 178.066 54.4194 178.122 54.4194H178.404C178.404 54.4194 178.743 54.4194 178.912 54.4194C179.335 54.4194 179.589 54.25 179.702 54.1371C179.843 53.996 179.956 53.7702 179.956 53.4879C179.956 53.2057 179.843 53.0081 179.73 52.8952C179.476 52.6411 179.081 52.6411 178.799 52.6411C178.658 52.6411 178.517 52.6411 178.433 52.6411C178.376 52.6411 178.235 52.6411 178.094 52.6411C178.066 52.6411 178.038 52.6411 178.038 52.6411C178.038 52.6411 178.038 52.6411 178.066 52.6411C178.094 52.6411 178.15 52.6411 178.15 52.6411V52.754ZM178.545 53.3468C178.545 53.1774 178.545 52.9516 178.545 52.8952C178.545 52.8952 178.545 52.8669 178.545 52.8387C178.545 52.8387 178.658 52.8387 178.686 52.8387C178.884 52.8387 179.138 52.8387 179.363 53.0645C179.476 53.1492 179.589 53.3468 179.589 53.6573C179.589 53.8831 179.533 54.1089 179.392 54.25C179.251 54.3629 179.081 54.4194 178.856 54.4194C178.658 54.4194 178.574 54.3629 178.545 54.3347C178.545 54.3347 178.545 54.2218 178.545 54.1653C178.545 54.1089 178.545 53.9395 178.545 53.6855V53.4032V53.3468Z" />
<path d="M180.576 54.4758H180.83H180.858C180.858 54.4758 180.858 54.4758 180.83 54.4758H180.802C180.802 54.4758 180.717 54.4758 180.717 54.3911C180.717 54.3911 180.717 54.3064 180.745 54.25L180.802 54.1089H181.479L181.592 54.3911V54.4476H181.563C181.563 54.4476 181.592 54.4476 181.648 54.4476H182.099H182.212C182.212 54.4476 182.212 54.4476 182.184 54.4476C182.184 54.4476 182.128 54.4476 182.071 54.4476C182.015 54.4476 181.958 54.4193 181.874 54.1935C181.733 53.8266 181.338 52.8951 181.281 52.754C181.281 52.6976 181.253 52.6693 181.225 52.6693C181.225 52.6693 181.197 52.6976 181.169 52.754L180.576 54.2218C180.576 54.2218 180.492 54.4193 180.379 54.4193C180.379 54.4193 180.322 54.4193 180.294 54.4193H180.266C180.266 54.4193 180.266 54.4193 180.322 54.4193H180.604L180.576 54.4758ZM181.112 53.1492L181.394 53.9395H180.802L181.084 53.1492H181.112Z" />
<path d="M182.438 54.4758H182.889H182.946C182.946 54.4758 182.946 54.4758 182.917 54.4758C182.917 54.4758 182.889 54.4758 182.861 54.4758C182.861 54.4758 182.804 54.4758 182.804 54.4476C182.804 54.4476 182.804 54.3911 182.833 54.3629L183.171 53.7984C183.284 53.9677 183.425 54.1935 183.538 54.4194C183.538 54.4476 183.538 54.4758 183.538 54.4758H183.51C183.51 54.4758 183.51 54.4758 183.594 54.4758H184.074H184.13C184.13 54.4758 184.13 54.4758 184.102 54.4758C184.102 54.4758 184.046 54.4758 184.017 54.4758C183.961 54.4758 183.933 54.4194 183.876 54.3629C183.82 54.2782 183.453 53.6573 183.369 53.5444L183.764 53.0081C183.764 53.0081 183.876 52.8387 183.933 52.8105C183.961 52.8105 183.989 52.8105 184.017 52.8105H184.046C184.046 52.8105 184.046 52.8105 184.017 52.8105C183.933 52.8105 183.848 52.8105 183.792 52.8105C183.764 52.8105 183.651 52.8105 183.566 52.8105C183.538 52.8105 183.51 52.8105 183.51 52.8105C183.51 52.8105 183.566 52.8105 183.594 52.8105C183.594 52.8105 183.622 52.8105 183.622 52.8387C183.622 52.8387 183.622 52.8952 183.622 52.9234C183.594 52.9798 183.369 53.3186 183.312 53.4032C183.228 53.2621 183.115 53.0645 183.03 52.8952V52.8387C183.03 52.8387 183.03 52.8387 183.058 52.8105H183.115H183.143C183.143 52.8105 183.143 52.8105 183.087 52.8105C183.002 52.8105 182.861 52.8105 182.833 52.8105C182.72 52.8105 182.522 52.8105 182.466 52.8105C182.438 52.8105 182.41 52.8105 182.41 52.8105C182.41 52.8105 182.466 52.8105 182.494 52.8105C182.579 52.8105 182.635 52.8952 182.692 52.9798L183.087 53.629L182.635 54.2782C182.635 54.2782 182.522 54.4476 182.438 54.4476C182.41 54.4476 182.353 54.4476 182.353 54.4476H182.325C182.325 54.4476 182.325 54.4476 182.353 54.4476H182.41L182.438 54.4758Z" />
<path d="M186.669 54.4758H186.923H186.951C186.951 54.4758 186.951 54.4758 186.923 54.4758H186.894C186.894 54.4758 186.81 54.4758 186.81 54.3911C186.81 54.3911 186.81 54.3064 186.838 54.25L186.894 54.1089H187.571L187.684 54.3911V54.4476H187.656C187.656 54.4476 187.684 54.4476 187.712 54.4476H188.164H188.277C188.277 54.4476 188.277 54.4476 188.248 54.4476C188.248 54.4476 188.192 54.4476 188.164 54.4476C188.107 54.4476 188.051 54.4193 187.966 54.1935C187.825 53.8266 187.459 52.8951 187.374 52.754C187.374 52.6976 187.346 52.6693 187.318 52.6693C187.318 52.6693 187.289 52.6976 187.261 52.754L186.669 54.2218C186.669 54.2218 186.584 54.4193 186.471 54.4193H186.415C186.415 54.4193 186.415 54.4193 186.471 54.4193H186.753L186.669 54.4758ZM187.205 53.1492L187.515 53.9395H186.923L187.205 53.1492Z" />
<path d="M188.389 53.0081C188.389 53.0081 188.389 52.9516 188.418 52.9234C188.446 52.867 188.502 52.8669 188.643 52.8387H188.982V53.7984C188.982 54.0242 188.982 54.1936 188.982 54.3065C188.982 54.3629 188.982 54.4194 188.925 54.4194C188.925 54.4194 188.869 54.4194 188.841 54.4194H188.812C188.812 54.4194 188.812 54.4194 188.869 54.4194H189.546H189.602C189.602 54.4194 189.602 54.4194 189.574 54.4194C189.546 54.4194 189.489 54.4194 189.461 54.4194C189.405 54.4194 189.377 54.3629 189.377 54.3065C189.377 54.1936 189.377 54.0242 189.377 53.7984V52.8387H189.659C189.856 52.8387 189.941 52.9234 189.941 52.9799V53.0363C189.941 53.0363 189.941 53.0363 189.941 53.0081C189.941 52.9516 189.941 52.7823 189.941 52.7258C189.941 52.6976 189.941 52.6694 189.941 52.6694C189.941 52.6694 189.856 52.6694 189.715 52.6694H188.784C188.784 52.6694 188.615 52.6694 188.559 52.6694C188.502 52.6694 188.474 52.6411 188.446 52.6411C188.446 52.6411 188.446 52.6411 188.418 52.6976C188.418 52.6976 188.361 52.9234 188.361 52.9516C188.361 52.9798 188.361 52.9799 188.361 52.9799L188.389 53.0081Z" />
<path d="M192.648 52.754C192.648 52.754 192.733 52.8105 192.733 52.8952C192.733 52.9798 192.733 53.0363 192.733 53.375V53.7984C192.733 54.0242 192.733 54.1935 192.733 54.3064C192.733 54.3629 192.733 54.4193 192.677 54.4193C192.677 54.4193 192.62 54.4193 192.592 54.4193C192.564 54.4193 192.564 54.4193 192.564 54.4193C192.564 54.4193 192.564 54.4193 192.62 54.4193H193.269H193.325C193.325 54.4193 193.325 54.4193 193.297 54.4193C193.269 54.4193 193.213 54.4193 193.184 54.4193C193.128 54.4193 193.1 54.3629 193.1 54.3064C193.1 54.2218 193.1 54.0524 193.1 53.7984V53.6008C193.128 53.6008 193.382 53.6008 193.438 53.6008C193.523 53.6008 193.551 53.6572 193.551 53.6855C193.551 53.7137 193.551 53.7419 193.551 53.7701V53.7984C193.551 53.7984 193.551 53.7701 193.551 53.7419C193.551 53.7419 193.551 53.629 193.551 53.5726C193.551 53.4879 193.551 53.4314 193.551 53.4314C193.551 53.4314 193.551 53.4314 193.523 53.4314C193.523 53.4314 193.466 53.4597 193.41 53.4597C193.382 53.4597 193.354 53.4597 193.297 53.4597H192.987V52.8669V52.8387H193.354C193.354 52.8387 193.495 52.8952 193.523 52.9234C193.523 52.9516 193.523 52.9798 193.523 53.0081V53.0363C193.523 53.0363 193.523 53.0363 193.523 53.0081C193.523 53.0081 193.523 52.8387 193.523 52.8105C193.523 52.754 193.523 52.7258 193.523 52.6976C193.523 52.6976 193.523 52.6976 193.495 52.6976C193.495 52.6976 193.438 52.6976 193.41 52.6976C193.354 52.6976 192.874 52.6976 192.79 52.6976C192.733 52.6976 192.564 52.6976 192.451 52.6976C192.423 52.6976 192.395 52.6976 192.395 52.6976C192.395 52.6976 192.395 52.6976 192.423 52.6976C192.451 52.6976 192.507 52.6976 192.507 52.6976L192.648 52.754Z" />
<path d="M194.454 52.754C194.454 52.754 194.538 52.8105 194.538 52.8952C194.538 52.9798 194.538 53.0363 194.538 53.375V53.7984C194.538 54.0242 194.538 54.2218 194.538 54.3065C194.538 54.3629 194.538 54.4194 194.482 54.4194C194.482 54.4194 194.425 54.4194 194.397 54.4194C194.369 54.4194 194.369 54.4194 194.369 54.4194C194.369 54.4194 194.369 54.4194 194.425 54.4194H195.074H195.131C195.131 54.4194 195.131 54.4194 195.102 54.4194C195.074 54.4194 195.018 54.4194 194.99 54.4194C194.933 54.4194 194.905 54.3629 194.905 54.3065C194.905 54.1935 194.905 54.0242 194.905 53.7984V53.375C194.905 53.0363 194.905 52.9516 194.905 52.8952C194.905 52.8105 194.905 52.7823 194.99 52.754H195.046H195.074C195.074 52.754 195.074 52.754 195.018 52.754C194.933 52.754 194.792 52.754 194.736 52.754C194.679 52.754 194.538 52.754 194.425 52.754C194.397 52.754 194.369 52.754 194.369 52.754C194.369 52.754 194.369 52.754 194.397 52.754C194.425 52.754 194.454 52.754 194.482 52.754H194.454Z" />
<path d="M195.836 52.754C195.836 52.754 195.92 52.8105 195.949 52.8952C195.949 52.9799 195.949 53.0363 195.949 53.375V53.7984C195.949 54.0242 195.949 54.1936 195.949 54.3065C195.949 54.3629 195.949 54.4194 195.892 54.4194C195.892 54.4194 195.836 54.4194 195.808 54.4194H195.779C195.779 54.4194 195.779 54.4194 195.836 54.4194H196.118C196.118 54.4194 196.456 54.4194 196.626 54.4194C197.049 54.4194 197.302 54.25 197.415 54.1371C197.556 53.996 197.669 53.7702 197.669 53.4879C197.669 53.2057 197.556 53.0081 197.444 52.8952C197.19 52.6411 196.795 52.6411 196.513 52.6411C196.372 52.6411 196.231 52.6411 196.146 52.6411C196.09 52.6411 195.949 52.6411 195.808 52.6411C195.779 52.6411 195.751 52.6411 195.751 52.6411C195.751 52.6411 195.751 52.6411 195.808 52.6411C195.864 52.6411 195.864 52.6411 195.892 52.6411L195.836 52.754ZM196.231 53.3468V52.8952C196.231 52.8952 196.231 52.8669 196.259 52.8387C196.259 52.8387 196.372 52.8387 196.4 52.8387C196.597 52.8387 196.851 52.8387 197.077 53.0645C197.161 53.1492 197.302 53.3468 197.302 53.6573C197.302 53.8831 197.246 54.1089 197.105 54.25C196.964 54.3629 196.823 54.4194 196.569 54.4194C196.372 54.4194 196.287 54.3629 196.259 54.3347C196.259 54.3347 196.259 54.2218 196.259 54.1653C196.259 54.1089 196.259 53.9395 196.259 53.6855V53.4032L196.231 53.3468Z" />
<path d="M198.318 52.754C198.318 52.754 198.403 52.8105 198.431 52.8952C198.431 52.9799 198.431 53.0363 198.431 53.375V53.7984C198.431 54.0242 198.431 54.1936 198.431 54.3065C198.431 54.3629 198.431 54.4194 198.374 54.4194C198.374 54.4194 198.318 54.4194 198.29 54.4194H198.262C198.262 54.4194 198.262 54.4194 198.318 54.4194H198.6C198.6 54.4194 198.882 54.4194 199.249 54.4194C199.333 54.4194 199.362 54.4194 199.362 54.3629C199.362 54.3065 199.39 54.1653 199.39 54.1089V54.0524C199.39 54.0524 199.39 54.0524 199.39 54.0807C199.39 54.1653 199.333 54.2218 199.277 54.25C199.221 54.25 199.108 54.25 199.051 54.25C198.826 54.25 198.769 54.2218 198.769 54.0524V53.5161C198.826 53.5161 199.051 53.5161 199.108 53.5161C199.192 53.5161 199.221 53.5444 199.249 53.6008C199.249 53.629 199.249 53.6573 199.249 53.6855C199.249 53.6855 199.249 53.6855 199.249 53.629C199.249 53.5726 199.249 53.5161 199.249 53.4879C199.249 53.375 199.249 53.3186 199.249 53.3186C199.249 53.3186 199.249 53.3186 199.221 53.3468C199.221 53.3468 199.164 53.375 199.108 53.375C199.051 53.375 198.769 53.375 198.741 53.375C198.741 53.375 198.741 53.375 198.741 53.3468V52.754C198.797 52.754 199.023 52.754 199.079 52.754C199.192 52.754 199.221 52.7823 199.221 52.8387C199.221 52.8387 199.221 52.8952 199.221 52.9234V52.9516C199.221 52.9234 199.221 52.8105 199.221 52.7823C199.221 52.6694 199.221 52.6411 199.221 52.6411H199.192C199.192 52.6411 199.136 52.6411 199.079 52.6411C199.023 52.6411 198.572 52.6411 198.487 52.6411C198.431 52.6411 198.29 52.6411 198.149 52.6411C198.12 52.6411 198.092 52.6411 198.092 52.6411C198.092 52.6411 198.092 52.6411 198.12 52.6411C198.149 52.6411 198.205 52.6411 198.205 52.6411L198.318 52.754Z" />
<path d="M200.151 52.754C200.151 52.754 200.236 52.8105 200.264 52.8951C200.264 52.9798 200.264 53.0363 200.264 53.375V53.7984C200.264 54.0242 200.264 54.1935 200.264 54.3064C200.264 54.3629 200.264 54.4193 200.208 54.4193C200.208 54.4193 200.151 54.4193 200.123 54.4193H200.095C200.095 54.4193 200.095 54.4193 200.151 54.4193H200.433C200.631 54.4193 200.772 54.4193 201.11 54.4193C201.223 54.4193 201.251 54.4193 201.251 54.3629C201.251 54.3064 201.28 54.1089 201.28 54.0806V54.0524C201.28 54.0524 201.28 54.0524 201.28 54.0806C201.28 54.1371 201.251 54.1935 201.223 54.2218C201.167 54.2782 201.082 54.2782 200.941 54.2782C200.772 54.2782 200.715 54.2782 200.659 54.2218C200.603 54.1653 200.603 54.0242 200.603 53.7137V53.2903C200.603 52.9516 200.603 52.8669 200.603 52.8105C200.603 52.7258 200.603 52.6976 200.687 52.6693C200.715 52.6693 200.744 52.6693 200.772 52.6693H200.8C200.8 52.6693 200.8 52.6693 200.744 52.6693C200.659 52.6693 200.49 52.6693 200.433 52.6693C200.377 52.6693 200.236 52.6693 200.123 52.6693C200.095 52.6693 200.067 52.6693 200.067 52.6693C200.067 52.6693 200.067 52.6693 200.095 52.6693C200.123 52.6693 200.151 52.6693 200.18 52.6693L200.151 52.754Z" />
<path d="M201.9 52.754C201.9 52.754 201.985 52.8105 201.985 52.8952C201.985 52.9798 201.985 53.0363 201.985 53.375V53.7984C201.985 54.0242 201.985 54.2218 201.985 54.3065C201.985 54.3629 201.985 54.4194 201.928 54.4194C201.928 54.4194 201.872 54.4194 201.844 54.4194H201.815C201.815 54.4194 201.815 54.4194 201.872 54.4194H202.521H202.577C202.577 54.4194 202.577 54.4194 202.521 54.4194C202.492 54.4194 202.436 54.4194 202.408 54.4194C202.323 54.4194 202.323 54.3629 202.323 54.3065C202.323 54.1935 202.323 54.0242 202.323 53.7984V53.375C202.323 53.0363 202.323 52.9516 202.323 52.8952C202.323 52.8105 202.323 52.7823 202.408 52.754C202.436 52.754 202.464 52.754 202.492 52.754C202.521 52.754 202.521 52.754 202.521 52.754C202.521 52.754 202.521 52.754 202.464 52.754C202.38 52.754 202.239 52.754 202.182 52.754C202.126 52.754 201.957 52.754 201.872 52.754C201.844 52.754 201.815 52.754 201.815 52.754C201.815 52.754 201.815 52.754 201.844 52.754C201.872 52.754 201.9 52.754 201.928 52.754H201.9Z" />
<path d="M203.592 54.504C203.592 54.504 203.846 54.504 203.959 54.4193C204.128 54.3064 204.185 54.1371 204.185 54.0242C204.185 53.7984 204.072 53.629 203.79 53.4314L203.734 53.375C203.536 53.2339 203.48 53.1492 203.48 53.0363C203.48 52.8951 203.592 52.7822 203.762 52.7822C203.903 52.7822 203.987 52.8669 204.016 52.8951C204.072 52.9516 204.072 53.0363 204.072 53.0363V53.0645C204.072 53.0645 204.072 53.0645 204.072 53.008C204.072 52.8105 204.072 52.754 204.072 52.7258C204.072 52.7258 204.072 52.7258 204.044 52.6976C203.987 52.6976 203.875 52.6693 203.734 52.6693C203.395 52.6693 203.198 52.8669 203.198 53.121C203.198 53.3185 203.282 53.4879 203.536 53.6855L203.649 53.7701C203.846 53.9113 203.875 54.0242 203.875 54.1371C203.875 54.25 203.762 54.3911 203.564 54.3911C203.423 54.3911 203.282 54.3347 203.226 54.1653C203.226 54.1089 203.226 54.0806 203.226 54.0524V53.996C203.226 53.996 203.226 53.996 203.226 54.0524C203.226 54.0806 203.226 54.2218 203.226 54.3629C203.226 54.4193 203.226 54.4193 203.282 54.4476C203.395 54.504 203.48 54.504 203.621 54.504H203.592Z" />
<path d="M184.187 29.4677C184.553 29.6371 184.976 29.4677 185.428 29.496C185.343 29.2984 185.23 29.1573 185.287 28.875C185.399 28.3105 184.948 28.1976 184.751 28.1976C184.243 28.2258 183.933 28.3387 183.397 28.1976C183.764 28.5645 183.679 29.2137 184.158 29.4677H184.187Z" />
<path d="M193.184 40.7016C191.182 40.7016 190.42 41.2661 189.32 42.0847V48.5766C189.32 48.5766 194.059 46.9395 196.626 42.367C196.033 41.492 195.159 40.7016 193.184 40.7016ZM194.792 43.3266L194.2 42.6492L193.184 43.5524L193.607 44.0323C193.607 44.0323 194.031 43.8347 194.425 44.2581C194.143 44.5121 193.636 44.9355 193.354 45.1895C192.987 44.7379 193.241 44.371 193.241 44.371L192.818 43.8911L191.577 44.992L191.182 44.5121L192.451 43.4395L192 42.9032C192 42.9032 191.83 43.0444 191.577 43.2702C191.21 42.8468 190.928 42.3105 191.182 41.6049C191.915 41.4355 192.423 41.8024 192.789 42.2258C192.536 42.4516 192.366 42.5928 192.366 42.5928L192.818 43.129L193.861 42.254L193.269 41.5766C193.805 41.5202 194.284 41.6895 194.538 42C194.792 42.3105 194.933 42.7903 194.792 43.3266Z" />
<path d="M180.943 34.4919C181.084 34.9718 181.197 35.4798 181.225 36.0444C181.225 36.7218 180.745 37.5121 180.238 38.3871C180.181 38.5 180.125 38.5847 180.068 38.6976C181.563 46.0927 188.728 48.5484 188.728 48.5484V34.5202C188.728 34.5202 183.34 34.5202 180.971 34.5202L180.943 34.4919ZM186.302 43.2702C185.935 43.3548 185.371 43.3831 185.005 43.3831C184.638 43.3831 184.074 43.3548 183.707 43.2702C183.735 43.129 183.792 42.9032 183.848 42.7057C183.594 42.7057 183.312 42.5927 183.087 42.5081C183.199 42.1129 183.369 41.746 183.51 41.2097C183.989 41.3226 184.469 41.3508 185.005 41.3508C185.54 41.3508 186.02 41.3226 186.5 41.2097C186.641 41.7178 186.81 42.1129 186.923 42.5081C186.697 42.5927 186.443 42.6774 186.161 42.7057C186.217 42.9315 186.274 43.129 186.302 43.2702ZM183.369 40.6734C183.369 40.5323 183.369 40.3347 183.369 40.1936C183.622 40.1089 184.694 40.0524 185.005 40.0524C185.315 40.0524 186.358 40.1089 186.641 40.1936C186.669 40.3347 186.669 40.5323 186.641 40.6734C186.246 40.7863 185.54 40.8427 185.005 40.8427C184.469 40.8427 183.764 40.7863 183.369 40.6734ZM187.346 37.4274C186.951 38.3871 186.556 39.3468 186.443 39.6573C186.246 39.629 186.02 39.6008 185.766 39.6008C186.048 38.7823 186.358 37.5968 186.641 36.8347C186.838 36.3266 187.712 36.5524 187.346 37.4274ZM185.005 36.0444C185.061 35.5928 186.302 35.5081 186.076 36.496C185.851 37.4557 185.54 38.6129 185.315 39.5726C185.202 39.5726 185.117 39.5726 185.005 39.5726C184.892 39.5726 184.779 39.5726 184.694 39.5726C184.469 38.5847 184.187 37.4557 183.933 36.496C183.707 35.5363 184.948 35.621 185.005 36.0444ZM183.369 36.8347C183.651 37.5686 183.961 38.754 184.243 39.6008C184.017 39.6008 183.792 39.6008 183.566 39.6573C183.453 39.375 183.058 38.3871 182.663 37.4274C182.297 36.5524 183.171 36.3266 183.369 36.8347Z" />
<path d="M196.569 35.875V35.5363H196.908C197.387 35.5363 197.613 35.0847 197.726 34.5484C195.892 34.5484 189.32 34.5484 189.32 34.5484V41.3226C189.856 40.9274 190.392 40.5887 191.069 40.3629V38.8669H191.746C191.774 37.2298 192.169 36.0443 192.931 35.254L193.156 35.0282L193.382 35.254C194.143 36.0443 194.538 37.2298 194.566 38.8669H195.272V40.4476C196.033 40.758 196.541 41.2379 196.908 41.746C197.528 40.4758 197.979 39.008 198.149 37.3427C198.12 37.3427 198.092 37.3427 198.036 37.3427C197.331 37.3427 196.569 36.8347 196.513 35.875H196.569Z" />
<path d="M209.516 51.371C209.093 51.5121 208.585 51.5685 207.823 51.5685H206.864C203.592 51.5121 200.208 50.5242 198.149 48.4073C200.998 45.5282 197.641 43.1573 195.836 45.6129C195.272 46.375 194.82 46.9113 194.425 47.6452C194.115 48.2379 194.341 48.8306 195.046 49.7621C195.441 50.2702 196.4 51.0605 197.19 51.5685H180.802C181.592 51.0605 182.551 50.2702 182.946 49.7621C183.651 48.8306 183.905 48.2379 183.566 47.6452C183.171 46.9113 182.72 46.375 182.156 45.6129C180.351 43.1573 176.994 45.5282 179.843 48.4073C177.784 50.5242 174.399 51.4839 171.127 51.5685H170.225C169.463 51.5685 168.955 51.4839 168.532 51.371C167.855 51.2016 167.714 51.5121 168.081 52.6693C168.335 53.4597 168.532 54.7298 168.617 55.6048H209.431C209.516 54.7298 209.713 53.4597 209.967 52.6693C210.334 51.5121 210.193 51.2016 209.488 51.371H209.516ZM196.738 45.7258C197.274 45.0202 198.064 45.2177 198.374 45.8105C198.713 46.4597 198.205 47.2218 197.556 47.8427C196.626 46.8266 196.513 46.0363 196.738 45.7258ZM195.384 49.0847C195.046 48.6048 194.933 48.3508 195.102 47.8992C195.272 47.4758 195.61 47.0806 195.977 46.5443C196.541 48.7742 199.897 50.8911 202.38 51.5968H198.431C197.415 51.0322 196.118 50.129 195.356 49.0847H195.384ZM179.645 45.7823C179.956 45.1895 180.745 44.9919 181.281 45.6976C181.507 46.0081 181.422 46.7984 180.492 47.8145C179.815 47.1935 179.307 46.4032 179.674 45.7823H179.645ZM182.015 46.5161C182.381 47.0524 182.72 47.4476 182.889 47.871C183.058 48.3226 182.946 48.6048 182.607 49.0564C181.845 50.1008 180.576 51.004 179.533 51.5685H175.584C178.066 50.8629 181.422 48.746 181.987 46.5161H182.015ZM208.726 54.9556H169.35C169.181 53.7137 168.927 52.8952 168.73 52.2177H209.375C209.149 52.8952 208.923 53.7137 208.754 54.9556H208.726Z" />
<path d="M191.633 20.4355C191.633 20.4355 191.407 20.4919 191.323 20.5766C191.182 20.5766 191.041 20.5202 190.9 20.5202V19.7298C191.041 19.6734 191.154 19.5323 191.154 19.3629C191.154 19.1371 190.984 18.9677 190.759 18.9677C190.533 18.9677 190.364 19.1371 190.364 19.3629C190.364 19.504 190.448 19.6452 190.561 19.7016V20.4637C190.561 20.4637 190.279 20.4637 190.138 20.4355C190.082 20.2944 189.941 20.2097 189.8 20.2097C189.574 20.2097 189.405 20.379 189.405 20.6048C189.405 20.8306 189.574 21 189.8 21C189.941 21 190.053 20.9435 190.11 20.8306C190.251 20.8306 190.42 20.8589 190.561 20.8871V22.0161C190.561 22.0161 190.336 22.2137 190.336 22.3548C190.336 22.5806 190.505 22.75 190.73 22.75C190.956 22.75 191.125 22.5806 191.125 22.3548C191.125 22.1855 191.041 22.0726 190.9 22.0161V20.9153C191.041 20.9153 191.154 20.9435 191.266 20.9718C191.323 21.1129 191.464 21.2258 191.633 21.2258C191.859 21.2258 192.028 21.0565 192.028 20.8306C192.028 20.6048 191.859 20.4355 191.633 20.4355Z" />
<path d="M188.248 20.2097C188.079 20.2097 187.938 20.2944 187.882 20.4355C187.741 20.4355 187.6 20.4355 187.487 20.4637V19.7016C187.487 19.7016 187.684 19.504 187.684 19.3629C187.684 19.1371 187.515 18.9677 187.289 18.9677C187.064 18.9677 186.894 19.1371 186.894 19.3629C186.894 19.5323 186.979 19.6734 187.12 19.7298V20.5202C187.12 20.5202 186.838 20.5484 186.697 20.5766C186.641 20.4919 186.528 20.4355 186.387 20.4355C186.161 20.4355 185.992 20.6048 185.992 20.8306C185.992 21.0565 186.161 21.2258 186.387 21.2258C186.556 21.2258 186.697 21.1129 186.753 20.9718C186.866 20.9718 186.979 20.9435 187.12 20.9153V22.0161C187.12 22.0161 186.894 22.2137 186.894 22.3548C186.894 22.5806 187.064 22.75 187.289 22.75C187.515 22.75 187.684 22.5806 187.684 22.3548C187.684 22.2137 187.6 22.0726 187.487 22.0161V20.8871C187.487 20.8871 187.769 20.8589 187.91 20.8306C187.966 20.9435 188.107 21 188.248 21C188.474 21 188.643 20.8306 188.643 20.6048C188.643 20.379 188.474 20.2097 188.248 20.2097Z" />
<path d="M197.838 33.4476C197.838 32.6855 197.726 32.0927 197.472 31.8387C197.387 31.754 197.303 31.7258 197.133 31.7258L196.456 31.8105L196.823 31.246C197.19 30.6814 197.697 30.3427 198.233 30.3145V25.2621H179.899V30.9072C179.899 30.9072 180.04 30.9919 180.097 31.0201L180.153 31.0766C180.661 31.5 180.858 31.7822 180.689 33.1935C180.689 33.3629 180.774 33.7016 180.858 34.0403H197.867C197.867 33.8427 197.867 33.6734 197.895 33.504L197.838 33.4476ZM184.807 31.1895C184.892 31.5847 184.976 31.8105 185.174 32.1492C184.497 32.5443 182.776 33.5605 181.479 32.4032V28.9879C182.466 28.4234 183.002 28 183.51 27.1814C183.115 26.9839 182.663 26.6452 182.297 26.1653C184.187 26.7016 185.146 26.9839 187.374 26.1653C187.007 26.7298 186.471 27.0968 186.02 27.379C186.528 28.1976 187.035 29.1572 187.205 29.9193C186.528 29.8629 185.794 30.0322 185.23 30.5121C184.384 30.5403 183.34 30.8226 182.748 28.9314C182.438 29.0726 182.156 29.2701 182.156 29.2701C182.494 30.5121 183.115 31.3589 184.779 31.1613L184.807 31.1895ZM187.712 31.7822C187.543 32.0363 186.471 32.375 186.189 32.2056C185.738 31.9234 185.512 31.3589 185.625 31.1048C185.766 30.7661 186.923 30.4556 187.318 30.5685C187.684 30.6814 187.853 31.5847 187.712 31.7822ZM195.413 27.7177C195.074 27.6331 193.636 27.5484 193.156 28.621C192.874 28.621 192.592 28.5081 192.423 28.3387C192.225 28.5927 191.943 28.7339 191.548 28.8468C191.887 29.5524 192.62 29.4395 193.043 29.1008C193.043 29.1855 193.043 29.2984 193.043 29.4113C193.043 31.1613 194.905 31.6129 196.061 30.9355C195.864 31.5 195.949 32.2056 196.061 32.7137H191.548C191.633 32.2339 192.225 31.6693 192.733 31.3306L192.338 30.7097C191.859 30.9355 191.379 31.1048 190.871 31.2742C189.63 31.5847 189.687 30.7097 190.984 30.3427V30.004H190.166C190.364 29.1008 192.084 28 192.846 27.7177C192.818 26.7581 194.059 26.4476 195.074 26.4193C196.315 26.3911 196.626 27.746 196.626 28.1411C196.626 28.7056 196.485 29.9193 195.779 30.3145C194.764 30.879 193.918 30.1169 193.918 29.4113C193.918 28.6492 194.454 28.2258 195.356 28.3105C196.259 28.4234 196.202 27.9153 195.497 27.7177H195.413Z" />
<path d="M220.037 21.0847C219.839 21.1411 219.388 21.2823 219.078 21.3105C219.67 20.746 220.009 20.0403 220.009 19.4758C219.726 19.5605 219.219 19.7581 218.767 19.8427C219.67 19.0806 220.178 18.1774 219.952 16.9919C219.67 17.1331 219.275 17.3589 218.88 17.5282C219.67 16.3145 219.67 15.2419 219.332 14.5927C218.965 14.9315 218.542 15.2984 218.09 15.5806C218.373 14.1694 218.373 13.2661 217.78 12.6452C217.188 13.7742 216.652 14.621 215.806 15.6371C215.862 14.7056 215.778 13.5484 215.157 12.9274C215.157 12.9274 214.988 14.2258 214.536 14.6492C214.424 13.379 214.029 12.6734 213.465 11.996C213.465 11.996 213.436 13.3226 213.07 14.1411C212.76 13.0403 212.195 12.1653 211.462 11.3468C211.518 13.8024 210.841 18.4032 208.867 21.5081C208.641 23.3427 208.444 26.1089 205.454 27.746C205.031 27.4355 204.269 27.0403 203.198 27.125C202.916 25.7419 204.721 24.4718 206.3 23.4839C207.88 22.4677 208.557 21.5927 208.529 20.2379C208.5 18.7419 207.485 18.1492 206.441 18.0927C204.975 18.0363 203.762 19.3629 203.508 19.9274C203.085 20.125 201.816 20.5202 201.308 20.6613C200.744 20.8024 200.095 21.0565 199.672 21.3952C199.926 21.5363 200.603 21.5927 200.885 21.5645C201.392 21.4798 202.972 21.1976 204.495 21C205.059 21.3105 205.934 21.7903 205.003 22.4677C203.705 23.2863 203.169 23.5121 201.336 24.4718C198.459 25.996 199.39 29.7782 200.095 30.0605C200.095 31.3306 201.251 33.6734 202.013 34.4637C202.351 36.0726 201.9 38.4718 201.421 39.4879C201.026 38.5 200.321 36.2419 199.869 34.9153C200.349 32.4032 199.587 31.3024 199.051 30.879C199.023 30.879 198.995 30.8508 198.938 30.8226V24.5564H194.059C194.002 24.0484 193.805 23.6815 193.466 23.5685C193.297 22.4395 192.959 19.871 192.761 17.9798C194.877 19.871 193.72 23.004 196.259 24.1613C197.218 23.0605 197.246 22.6653 197.077 21.621C198.036 21.3669 198.741 20.5766 198.995 19.9556C198.092 20.379 196.654 19.6169 196.259 19.0242C197.838 18.9677 199.277 17.7823 200.772 16.2298C202.098 14.8468 203.875 15.0444 203.734 16.1452C204.664 16.004 205.031 14.7339 204.721 13.9435C206.075 13.5202 207.118 12.5323 207.287 10.9516C205.482 11.8548 203.198 10.3589 201.477 12.1935C201.477 9.76613 201.392 7.7621 201.364 7.14113C201.449 7.14113 201.562 7.19758 201.646 7.22581C203.395 7.84677 203.79 9.93548 207.4 7.56452C205.482 7.79032 205.369 6.15323 204.495 6.125C205.821 5.3629 205.905 3.64113 205.905 3.64113C204.777 4.54435 202.182 4.60081 201.674 4.88306C200.998 5.27823 200.151 5.78629 199.587 6.09677C198.092 6.91532 199.136 11.3468 198.995 12.9839C198.177 10.5565 196.541 10.9234 195.695 9.54032C195.046 10.6976 195.723 12.6452 196.005 13.1815C195.074 13.9435 195.328 15.3266 195.554 15.7218C196.343 15.1573 197.585 15.2984 197.951 16.2581C196.936 16.879 195.272 16.9919 194.087 15.9194C194.087 15.5806 193.974 15.2137 193.579 14.9315C193.664 14.4516 193.579 14 193.354 13.6048C194.623 11.8266 194.708 8.38306 195.751 7.39516C195.836 8.60887 196.485 9.59677 197.105 9.7379C196.597 8.91935 196.597 7.25403 196.626 6.49194C196.626 6.15323 196.005 5.87097 195.836 5.87097C195.554 5.87097 195.215 6.43548 194.877 6.77419C194.567 5.10887 194.736 4.375 194.877 3.64113C195.582 4.91129 196.541 5.19355 197.049 5.1371C195.356 3.78226 195.638 2.54032 195.131 2.48387C194.849 2.45565 194.623 2.48387 194.482 2.48387C193.89 2.48387 193.805 3.64113 193.72 4.17742C193.325 3.47177 192.959 2.85081 192.31 2.03226C191.689 0.423387 190.9 0.818548 190.138 0.0846774C190.73 1.01613 190.251 1.58065 191.661 2.22984C192.028 2.56855 192.451 3.13306 192.733 3.55645C192.507 3.86694 192.338 4.03629 192.113 4.2621C191.943 4.51613 191.859 5.53226 191.295 6.26613C192.113 5.92742 192.423 5.41935 192.705 4.93952C195.243 6.85887 193.184 11.7702 192.592 12.8427C192.028 12.4758 191.323 12.25 190.674 12.1371L190.618 11.9113L190.025 9.96371H190.307C190.618 9.96371 190.702 9.7379 190.646 9.56855L192.395 10.1048L193.184 10.3306L192.705 9.68145L191.887 8.55242L192.705 7.42339L193.184 6.77419L192.395 7L190.815 7.47984C190.702 7.1129 190.42 6.94355 190.082 6.91532L190.618 5.10887L190.843 4.34677L190.195 4.82661L189.066 5.64516L187.938 4.82661L187.289 4.34677L187.515 5.10887L188.051 6.91532C187.741 6.97177 187.43 7.14113 187.318 7.47984L185.738 7L184.976 6.77419L185.456 7.42339L186.274 8.55242L185.456 9.68145L184.976 10.3306L185.738 10.1048L187.515 9.56855C187.459 9.7379 187.515 9.96371 187.853 9.96371H188.135L187.543 11.9113L187.487 12.1371C186.81 12.25 186.076 12.4758 185.512 12.871C183.792 9.54032 184.271 6.18145 185.71 5.05242C185.71 5.75806 186.302 6.71774 186.584 6.91532C186.387 6.18145 186.725 4.88306 186.358 4.57258C186.105 4.34677 185.682 4.23387 185.258 4.23387C185.541 3.75403 185.964 3.16129 186.612 2.25806C187.628 1.77823 187.91 0.592742 188.164 0C187.064 0.395161 186.274 0.959677 186.076 1.89113C185.682 2.39919 185.258 3.02016 184.779 3.72581C184.779 2.85081 184.328 2.56855 183.707 2.5121C181.845 2.90726 181.987 4.23387 180.407 5.16532C181.479 5.53226 183.199 3.16129 183.764 3.41532C183.848 4.88306 183.51 6.0121 183.51 6.83065C183.228 6.52016 183.087 6.32258 182.861 6.26613C182.635 6.2379 182.015 6.26613 181.592 6.74597C181.479 7.47984 181.507 8.8629 180.802 10.5282C181.845 9.56855 182.325 7.73387 182.494 7.19758C182.748 7.56452 183.058 8.35484 183.115 9.03226C183.228 10.3589 184.046 12.5605 184.751 13.6331C184.553 14 184.497 14.4234 184.553 14.875C184.046 15.2419 183.989 15.75 184.102 16.1169C183.115 16.625 181.902 17.0484 181.281 17.246C181.028 15.1855 182.974 15.2702 183.143 15.8347C183.961 14.875 183.397 13.4919 182.804 13.3508C183.425 11.7137 182.804 10.6976 182.297 10.1048C182.184 11.8548 180.238 12.1371 180.012 13.4637C179.927 12.3911 179.871 9.54032 179.786 8.12903C179.645 5.53226 176.373 4.62903 175.866 4.62903C173.722 4.74194 173.525 4.45968 173.581 3.44355C172.509 4.68548 172.876 5.78629 173.779 6.29435C173.666 7.02823 172.481 7.62097 171.748 7.79032C173.496 9.39919 175.499 8.43952 176.458 7.53629C176.543 7.47984 176.599 7.42339 176.656 7.33871C176.994 7.95968 177.248 9.08871 177.248 9.70968C175.612 9.625 175.33 10.8952 175.33 11.3468C177.389 10.5 177.615 14.4516 178.15 15.1008C177.615 15.0726 176.684 13.8306 175.33 13.746C173.666 13.6331 173.102 14.5363 172.425 14.4798C172.537 15.6371 173.976 16.3145 174.879 16.4556C174.399 17.6411 174.822 18.4597 175.809 18.7702C175.809 17.6694 177.191 17.3306 178.686 18.2056C180.463 19.25 181.394 19.3347 182.804 18.8831C182.579 19.3911 181.93 19.4476 181.14 20.2379C180.04 21.3387 180.012 22.75 178.771 23.2863C180.238 23.9919 182.41 23.004 182.72 22.4677C183.34 22.8347 184.102 22.6089 184.328 22.2419C183.51 20.4073 184.553 19.1935 185.287 18.8831C185.089 20.6331 184.835 22.6089 184.694 23.5685C184.356 23.7097 184.158 24.0484 184.102 24.5564H179.222V30.8508C178.968 30.7379 178.715 30.6532 178.461 30.4556C178.038 30.1734 177.925 29.75 177.417 29.1855C177.53 28 178.376 26.5323 178.997 26.2218C179.081 26.1653 179.053 24.3306 179.053 24.3306C179.053 24.3306 179.476 24.3306 179.42 24.3024C178.856 23.9637 178.179 24.2177 177.699 24.7823C177.22 25.1774 176.148 25.8831 175.386 26.1371C174.371 25.2903 172.791 24.5282 171.635 23.371C171.635 23.371 173.158 23.371 173.863 23.0605C174.061 22.9476 174.54 22.1573 174.343 21.4234C174.117 21.3387 173.75 21.1694 173.44 20.9718C173.017 20.746 172.622 20.4637 172.425 20.3226C171.748 19.8145 171.494 19.3911 170.337 19.0806C170.422 18.5444 170.535 18.6855 171.043 18.3468C171.691 17.9234 172.03 17.3871 172.312 16.879C172.509 16.4839 172.312 15.6371 171.776 16.7097C171.607 17.0766 171.099 17.5847 170.535 17.7258C170.591 17.3871 170.591 17.2177 170.591 17.0202C172.255 15.8347 172.114 14.7903 171.973 13.8024C171.917 13.2379 171.325 12.9839 171.353 13.5766C171.353 13.9718 171.719 15.0726 170.563 15.7218C170.563 15.2419 170.394 15.0161 170.309 14.7621C171.325 13.4073 170.901 12.1089 170.478 11.5161C170.196 11.1492 169.519 11.0081 169.83 11.6008C170.083 12.0806 170.478 13.4355 169.717 13.9718C169.463 13.6331 169.153 13.5202 169.04 13.0685C169.124 11.6008 169.04 10.7258 168.842 10.1895C168.673 9.70968 168.194 9.39919 168.25 10.1048C168.278 10.9234 168.363 11.9395 168.278 11.996C168.194 12.0524 167.122 11.0645 166.671 10.754C166.219 10.4435 165.712 10.5565 166.219 11.1774C166.671 11.7137 168.053 12.7298 167.883 13.0685C167.771 13.2661 166.783 12.4476 166.276 12.2782C165.768 12.1089 165.599 12.3629 166.022 12.7298C166.727 13.3226 167.206 13.6895 168.363 14.0847C169.519 14.4798 170.112 16.0887 169.745 18.375C169.745 18.4879 169.519 18.4597 169.407 18.4315C169.35 17.5565 169.209 16.5121 168.983 16.0605C168.701 15.4677 168.165 15.4395 168.363 16.2581C168.532 16.9073 168.617 17.6129 168.504 18.4879C167.545 18.3185 167.178 18.0645 166.783 17.8387C166.727 17.3871 166.981 16.6815 167.009 16.004C167.037 15.3548 166.671 14.9597 166.445 15.7782C166.247 16.5403 166.106 16.9355 165.965 17.4718C165.683 17.3871 165.401 17.246 165.26 17.1048C165.204 17.0202 165.26 16.1734 165.204 15.5242C165.147 14.8185 164.865 14.8185 164.64 15.4677C164.555 15.75 164.47 16.1452 164.442 16.5968C164.104 16.3992 163.878 16.004 163.85 15.6935C163.906 14.9597 164.019 14.1694 164.104 13.6613C164.16 13.3226 163.935 12.5887 163.652 13.4637C163.455 14.0847 163.399 14.621 163.286 15.0444C163.032 15.0444 162.722 13.6048 162.552 12.7016C162.468 12.2782 162.129 11.8266 162.073 12.7298C162.017 13.746 162.214 14.7621 162.468 15.2137C161.988 15.1573 161.509 14.2823 161.17 13.7742C160.86 13.3226 160.719 13.7742 160.747 13.9718C161.029 15.7782 162.468 16.4274 163.117 16.5403C164.132 17.9798 166.05 18.6008 167.686 19.3065C165.571 19.3065 165.006 20.125 164.047 19.5887C164.104 20.379 164.499 20.746 164.865 20.9435C165.147 21.0565 165.401 21.1129 165.542 21.1411C165.712 22.1008 166.642 22.0726 167.432 22.1008C167.235 23.9919 167.432 26.4758 169.124 28.3387C169.068 29.2984 169.012 30.5685 169.012 31.3871C167.658 32.6573 166.445 35.2823 165.965 36.75C165.599 37.8508 165.063 38.6976 164.245 39.0927C164.922 39.8266 165.937 39.4597 166.501 39.0645C166.53 39.7137 166.699 40.1653 166.783 40.5323C166.388 41.125 166.135 41.5202 166.163 42.2258C165.712 42.3387 165.429 42.621 165.176 42.9314C165.035 43.129 165.176 44.004 165.373 44.3427C165.909 45.5564 165.486 48.2944 165.373 49.1129C165.599 49.1129 166.022 49.1129 166.106 48.8024C166.247 48.9153 166.558 49.1693 166.727 49.7056C166.699 49.9314 166.558 50.7782 166.981 50.8911C167.319 50.9758 168.842 50.9193 169.068 50.6653C168.927 50.496 168.645 50.0726 168.476 49.6774C168.476 49.254 168.448 48.746 168.335 48.5484C168.165 48.2379 167.714 47.5323 167.432 47.25C167.376 46.7419 167.319 44.5121 167.545 43.6653C167.94 43.3831 170.619 41.4073 171.184 39.4879C171.663 39.6573 171.522 40.9839 171.522 42.7056C171.522 43.1573 172.086 43.4113 172.425 43.4395C173.158 43.5242 174.173 44.2298 175.33 45.9234C175.556 45.6693 175.838 45.4435 175.838 45.4435C175.979 45.6411 176.176 46.1492 176.261 46.4597C176.373 46.6855 177.332 46.8266 178.038 46.629C178.263 46.5443 178.404 46.5161 178.574 46.2621C177.671 44.6814 177.107 43.6371 175.95 42.7339C175.414 42.3387 174.681 42.1129 174.089 41.746C174.484 40.9839 175.612 37.4274 174.935 36.129C174.709 35.7056 173.863 35.2823 172.848 35.4516C173.694 34.4073 175.443 32.375 175.668 31.754C175.866 31.9798 176.909 31.8387 177.671 32.121C177.953 32.2339 178.743 33.25 178.771 33.5887C178.827 34.2097 178.884 34.9718 178.433 36.6935C178.743 36.6371 178.686 36.6371 178.997 36.496C179.053 36.9476 178.912 37.3145 178.517 38.0202C178.63 38.6411 178.884 39.6008 179.194 39.7702C179.251 39.6008 179.363 39.4032 179.476 39.2056C179.504 39.3468 179.533 39.5161 179.589 39.6573C179.645 39.9113 179.73 40.1653 179.815 40.3911C179.899 40.6452 180.012 40.9274 180.097 41.1814C180.21 41.4637 180.351 41.746 180.463 42.0282C180.604 42.3105 180.774 42.621 180.915 42.9032C181.084 43.2137 181.281 43.496 181.479 43.7782C181.704 44.0887 181.93 44.371 182.156 44.6532C182.41 44.9637 182.663 45.246 182.946 45.5282C183.228 45.8387 183.538 46.121 183.876 46.4032C184.215 46.6855 184.581 46.9677 184.948 47.2218C185.343 47.504 185.738 47.7581 186.161 48.0121C186.612 48.2661 187.064 48.5202 187.543 48.746C188.051 49 188.559 49.2258 189.066 49.4234C189.066 49.4234 189.151 49.3952 189.179 49.3669C189.236 49.3669 189.264 49.3387 189.32 49.3105C189.405 49.2823 189.489 49.254 189.574 49.1976C190.082 49 190.561 48.746 191.041 48.4919C191.492 48.2661 191.915 48.0121 192.338 47.7298C192.733 47.4758 193.128 47.2218 193.495 46.9395C193.833 46.6855 194.172 46.4032 194.51 46.0927C194.82 45.8105 195.102 45.5282 195.384 45.2177C195.638 44.9355 195.892 44.6532 196.146 44.3427C196.372 44.0605 196.597 43.75 196.795 43.4677C196.992 43.1855 197.161 42.9032 197.331 42.5927C197.5 42.3105 197.641 42.0282 197.782 41.746C197.895 41.4637 198.036 41.2097 198.12 40.9274C198.233 40.6734 198.318 40.4194 198.403 40.1371C198.487 39.9113 198.544 39.6573 198.6 39.4032C198.656 39.1774 198.713 38.9798 198.741 38.754C198.769 38.5565 198.826 38.3871 198.854 38.1895C198.854 38.0202 198.91 37.879 198.91 37.7097C198.91 37.4556 198.938 37.2016 198.967 36.9476C199.136 37.4556 199.531 38.6411 199.926 39.7702C200.208 40.5605 200.462 41.2661 200.631 41.6613C200.828 42.0847 202.239 42.1411 202.38 41.6613C202.605 41.0121 202.774 40.5323 203.141 39.7702C203.423 39.2056 203.79 38.4718 204.354 37.371C204.721 38.0202 205.228 39.0645 205.511 39.7702C205.652 40.0806 205.736 40.3629 205.764 40.4758C205.877 41.5484 205.821 45.3871 205.511 47.6734C202.351 46.8266 201.477 48.3508 201.759 49.5081C202.21 49 202.803 49.0847 203.169 49.3387C203.085 50.1855 203.31 50.7782 204.157 51.0323C205.059 48.6331 208.303 49.1694 208.613 49.3669C208.613 48.9153 209.064 47.7581 207.4 47.504C207.457 45.4435 207.682 42.9032 207.739 42.3669C207.823 41.8306 207.88 41.5202 207.626 40.6734C207.541 40.4194 207.457 40.1089 207.372 39.7702C207.146 38.9234 206.921 37.8508 206.921 36.6653C207.203 36.9476 207.908 37.1734 208.388 37.0887C208.754 38.6411 209.29 38.1895 209.572 38.8387C209.713 39.1774 209.741 39.4879 209.798 39.7702C209.826 40.0524 209.882 40.2782 210.023 40.4758C211.152 40.504 212.083 40.25 212.76 39.7702C212.957 39.629 213.154 39.4597 213.295 39.2621C213.013 37.5968 212.562 36.7782 211.688 35.7621C211.462 34.4073 210.813 33.1653 209.967 32.0645C211.067 31.6976 212.167 30.8226 212.76 30.2016C213.295 30.1734 213.888 29.7218 213.944 28.875C214.254 28.8468 214.508 28.8186 214.762 28.7621C214.762 28.5363 214.678 28.1694 214.649 27.9436C215.044 27.9436 215.439 27.9435 215.806 27.8871C215.693 27.5766 215.552 27.2379 215.439 27.0121C215.834 27.0121 216.342 26.9839 216.737 26.9556C216.511 26.5605 216.37 26.1935 216.229 25.8548C216.68 25.7984 217.414 25.6855 218.006 25.5444C217.808 25.3468 217.611 25.1492 217.272 24.8387C218.796 24.3871 219.473 23.3145 219.557 22.8347C219.332 22.8347 218.852 22.9476 218.598 22.9194C219.444 22.4113 220.037 21.7339 220.121 20.9718L220.037 21.0847ZM190.787 8.04436L191.718 7.7621L191.266 8.38306L191.154 8.55242L191.266 8.72177L191.718 9.34274L190.533 8.97581C190.646 8.72177 190.73 8.46774 190.787 8.04436ZM186.33 9.34274L186.782 8.72177L186.894 8.55242L186.782 8.38306L186.33 7.7621L187.261 8.04436C187.317 8.43952 187.402 8.72177 187.515 8.97581L186.33 9.34274ZM192.733 23.4839C192.395 23.5403 192 23.7097 191.605 23.9637C190.674 24.5847 189.602 24.6129 189.01 23.5121C188.418 24.6129 187.346 24.5847 186.415 23.9637C186.048 23.7097 185.653 23.5403 185.287 23.4839C185.456 22.3831 185.71 20.3226 185.907 18.6008C187.12 18.0363 188.615 17.9234 189.01 19.3347C189.377 17.9234 190.871 18.0645 192.084 18.6008C192.282 20.3508 192.536 22.4113 192.705 23.4839H192.733ZM189.01 15.7782C190.195 15.7782 191.182 16.0887 191.887 16.371C191.887 16.5968 191.887 16.8226 191.943 17.1048C191.154 16.879 190.082 16.7097 189.01 16.7097C187.938 16.7097 186.866 16.879 186.076 17.1048C186.076 16.8226 186.105 16.5968 186.133 16.371C186.838 16.1169 187.825 15.7782 189.01 15.7782ZM186.866 14.621C187.402 14.4798 187.966 14.3952 188.502 14.3669L188.897 15.129C188.389 15.129 187.938 15.1855 187.515 15.2702L186.866 14.621ZM190.73 14.5363C191.295 14.6492 191.859 14.8185 192.338 15.0161L192.564 15.9194C192.197 15.7782 191.718 15.5806 191.125 15.4113L190.73 14.5363ZM202.21 5.33468C202.831 5.33468 203.931 5.27823 204.58 4.96774C203.903 5.81452 203.818 6.09677 202.718 6.2379C204.157 6.37903 204.749 7.64919 205.454 7.84677C203.057 8.58065 202.803 6.20968 200.631 6.35081C201.364 5.81452 201.816 5.58871 202.21 5.3629V5.33468ZM196.09 14.7056C196.174 13.9435 196.626 13.4073 196.879 13.3226C196.231 12.5887 196.09 11.629 196.033 10.9516C197.105 11.4032 198.685 12.6734 198.938 14.8185L199.644 14.3387C199.446 10.5847 199.474 10.5847 199.446 8.01613C199.446 7.64919 199.446 6.83065 200.603 6.91532C200.659 7.875 200.8 10.3871 200.744 13.9153H201.139C201.505 12.9274 202.803 11.7984 204.298 11.8831C205.341 11.9395 205.68 11.9395 206.272 11.6573C205.793 12.8427 204.016 13.3508 203.564 13.4355C204.269 14.0282 204.044 14.8468 203.875 15.0444C203.254 13.9718 201.223 14.3387 199.249 16.5685C199.108 16.7379 198.91 16.9355 198.713 17.1331C198.854 14.4516 196.682 14.4234 196.033 14.6774L196.09 14.7056ZM193.72 16.4839C194.651 17.4153 196.541 17.754 198.008 16.9355C198.008 17.1895 197.951 17.4718 197.838 17.7823C197.02 18.2056 195.977 18.4597 194.764 18.0363C194.933 19.25 196.315 20.1532 197.669 20.5202C197.218 20.8589 196.654 21 196.259 20.9718C196.513 21.6774 196.654 22.6089 196.118 23.371C195.441 22.9194 195.102 22.496 194.849 20.7742C194.623 19.1935 193.551 17.6411 192.648 17.1331C192.648 16.9637 192.62 16.7944 192.62 16.6532C193.072 16.8226 193.495 16.7379 193.749 16.4839H193.72ZM190.025 9.03226H189.292L189.377 7.73387C190.477 7.25403 190.392 8.27016 190.025 9.03226ZM189.01 11.3468L189.884 11.996C189.518 11.9677 189.207 11.9677 189.01 11.9677C188.812 11.9677 188.502 11.9677 188.135 11.996L189.01 11.3468ZM188.248 11.2339L188.643 9.90726H189.405L189.8 11.2339L189.179 10.7823L189.01 10.6694L188.841 10.7823L188.22 11.2339H188.248ZM188.869 6.18145L189.038 6.29435L189.207 6.18145L189.856 5.72984L189.489 6.97177C189.489 6.97177 189.489 6.97177 189.461 6.97177C189.405 6.83065 189.236 6.71774 189.066 6.71774C188.897 6.71774 188.728 6.83065 188.671 6.97177C188.671 6.97177 188.671 6.97177 188.643 6.97177L188.277 5.72984L188.925 6.18145H188.869ZM188.023 9.03226C187.656 8.24194 187.571 7.22581 188.671 7.73387L188.756 9.03226H188.023ZM185.625 13.8024C186.246 13.0685 187.853 12.7863 189.038 12.7863C190.223 12.7863 191.831 13.0403 192.451 13.8024C192.592 13.9718 192.677 14.1976 192.705 14.4234C191.633 13.9435 190.279 13.6613 189.038 13.6613C187.797 13.6613 186.443 13.9435 185.371 14.4234C185.371 14.1976 185.484 13.9718 185.625 13.8024ZM185.005 15.3548C185.005 15.3548 185.089 15.2984 185.146 15.2702L185.766 15.7782C185.766 15.7782 185.512 15.8911 185.399 15.9194L185.202 16.004C184.948 16.1169 184.751 16.004 184.694 15.8911C184.638 15.75 184.694 15.5242 185.005 15.3266V15.3548ZM173.13 7.95968C174.343 7.36694 174.23 6.46371 174.935 6.0121C174.484 5.95565 173.609 5.75806 173.609 5.10887C174.822 5.70161 175.217 4.60081 177.502 6.06855C175.979 6.54839 174.822 8.41129 173.13 7.93145V7.95968ZM178.009 17.246C177.276 16.9355 176.148 16.7661 175.527 17.6411C175.189 17.0484 175.697 16.1452 176.007 15.8911C174.399 15.8911 173.496 15.4395 173.271 14.9597C173.863 14.621 175.358 14.0847 176.571 14.9597C177.417 15.5806 177.84 15.8911 178.827 16.2016C179.194 15.8347 179.053 16.004 179.166 15.8911C178.348 15.3266 177.981 10.9516 176.373 10.8105C176.599 10.246 177.445 10.3024 178.094 10.4718C178.15 9.48387 177.727 7.875 177.135 6.94355C178.066 6.46371 178.715 6.97177 179.025 8.12903C179.363 9.37097 178.968 12.4476 179.758 15.2137L180.266 14.7621C180.012 13.1532 181.789 12.5605 182.184 11.7419C182.325 12.8145 182.099 13.3226 181.817 13.7177C182.466 13.8024 182.748 14.4234 182.635 14.875C181.084 14.6492 180.181 16.2016 180.548 17.4435C179.392 17.6976 178.63 17.5 177.981 17.246H178.009ZM183.481 21.9315C183.284 22.0161 182.692 21.9879 182.522 21.5927C182.381 22.2419 181.084 22.9758 180.125 22.8911C180.661 22.3266 180.999 21.0282 182.043 20.3508C183.087 19.6734 183.538 19.1935 183.905 18.0363C183.425 18.2621 180.943 18.9113 180.238 18.121C181.733 17.8952 183.453 17.1331 184.469 16.5403C184.723 16.7097 185.089 16.7944 185.484 16.625C185.456 17.0484 185.399 17.5847 185.343 18.1774C184.102 18.4597 183.002 20.0685 183.51 21.9032L183.481 21.9315ZM198.572 37.7661C198.572 37.9355 198.544 38.0766 198.515 38.246C198.515 38.4435 198.459 38.6129 198.431 38.8105C198.374 39.0363 198.346 39.2339 198.29 39.4597C198.233 39.6855 198.149 39.9395 198.092 40.1653C198.008 40.4194 197.923 40.6734 197.81 40.9274C197.697 41.2097 197.585 41.4637 197.472 41.7177C197.331 42 197.19 42.2823 197.049 42.5645C196.879 42.8468 196.71 43.129 196.513 43.4113C196.315 43.7218 196.118 44.004 195.892 44.2863C195.667 44.5686 195.413 44.879 195.159 45.1613C194.877 45.4435 194.595 45.754 194.284 46.0081C193.974 46.2903 193.636 46.5726 193.297 46.8266C192.931 47.1089 192.564 47.3629 192.169 47.6169C191.746 47.871 191.323 48.125 190.871 48.3508C190.42 48.6048 189.912 48.8306 189.433 49.0282L189.179 49.1411L189.066 49.1976C188.587 49.0282 188.079 48.8024 187.628 48.5766C187.176 48.3508 186.697 48.0968 186.274 47.8427C185.851 47.5887 185.456 47.3347 185.089 47.0524C184.723 46.7984 184.384 46.5161 184.046 46.2339C183.735 45.9516 183.425 45.6694 183.143 45.3871C182.861 45.1048 182.607 44.8226 182.353 44.5121C182.128 44.2298 181.902 43.9476 181.704 43.6371C181.507 43.3548 181.338 43.0726 181.14 42.7621C180.971 42.4798 180.83 42.1976 180.689 41.9153C180.548 41.6613 180.435 41.379 180.322 41.0968C180.21 40.8427 180.125 40.5887 180.04 40.3064C179.956 40.0806 179.899 39.8266 179.815 39.5726C179.758 39.3468 179.702 39.121 179.645 38.9234C179.645 38.8952 179.645 38.8387 179.645 38.8105C180.21 37.8226 180.999 36.7218 180.971 36.0161C180.915 34.7177 180.322 33.6169 180.379 33.0524C180.548 31.6411 180.322 31.5282 179.899 31.1895C179.786 31.0766 179.589 31.0202 179.448 30.9355V24.7823H184.469C185.484 24.7823 187.938 24.8387 189.066 24.8387C190.195 24.8387 192.62 24.8105 193.636 24.7823H198.656V30.625C198.149 30.4839 197.556 30.6814 197.133 31.3589C197.951 31.2742 198.233 32.3468 198.233 33.4476C198.233 34.7742 197.867 35.8468 196.964 35.8468C197.02 36.8911 198.036 37.2016 198.656 36.8347V36.9476C198.656 37.2016 198.656 37.4556 198.6 37.7097L198.572 37.7661Z" />
<path d="M144.388 7.25403H142.977V55.6613H144.388V7.25403Z" />
<path d="M116.605 40.3064C117.366 40.3064 117.987 40.4476 118.523 40.7016C119.03 40.9839 119.425 41.379 119.707 41.9435C119.961 42.508 120.102 43.2137 120.102 44.0605C120.102 45.3589 119.792 46.3468 119.171 46.996C118.551 47.6451 117.62 47.9839 116.351 47.9839H115.194V40.3064H116.633H116.605ZM116.746 38.6411H113.192V49.621H116.463C117.648 49.621 118.664 49.4234 119.538 49C120.384 48.5766 121.061 47.9556 121.512 47.1089C121.964 46.2621 122.218 45.2177 122.218 43.9758C122.218 42.8185 121.992 41.8306 121.569 41.0403C121.146 40.25 120.497 39.6572 119.707 39.2621C118.889 38.8387 117.93 38.6411 116.802 38.6411M105.068 38.6411H102.642V49.621H104.419V44.0887C104.419 43.7218 104.419 43.383 104.391 43.0161C104.391 42.6492 104.363 42.3105 104.335 41.9718C104.335 41.633 104.307 41.3226 104.278 41.0121H104.335L109.525 49.621H111.979V38.6411H110.202V44.2298C110.202 44.5685 110.202 44.9072 110.23 45.2459C110.23 45.6129 110.23 45.9516 110.258 46.2903C110.258 46.629 110.258 46.9395 110.286 47.1935H110.23L105.04 38.6411H105.068ZM95.1114 45.0484L96.0704 42.3105C96.1268 42.1411 96.1832 41.9153 96.2396 41.6895C96.296 41.4355 96.3806 41.1814 96.4371 40.9274C96.4935 40.6451 96.5499 40.4193 96.6063 40.1935C96.6345 40.3629 96.7191 40.5887 96.7755 40.8992C96.8602 41.1814 96.9448 41.4637 97.0012 41.746C97.0858 42.0282 97.1422 42.2258 97.1986 42.3387L98.1294 45.0766H95.0832L95.1114 45.0484ZM88.2573 38.6411H86.2546V49.621H93.56L94.5755 46.7419H98.6372L99.6808 49.621H101.796L97.7628 38.5847H95.5063L92.0933 47.9274H88.2573V38.6129V38.6411ZM79.6262 47.8992C79.062 47.7298 78.5543 47.5322 78.103 47.3347V49.1693C78.3851 49.3105 78.6671 49.4234 79.0056 49.508C79.3441 49.5927 79.6826 49.6774 80.0493 49.7056C80.4159 49.7621 80.7826 49.7621 81.2057 49.7621C82.0237 49.7621 82.757 49.621 83.3494 49.3669C83.9417 49.1129 84.4212 48.7459 84.7315 48.2661C85.0418 47.7863 85.211 47.2218 85.211 46.6008C85.211 46.0363 85.0982 45.5564 84.8725 45.1613C84.6469 44.7661 84.3366 44.4274 83.9135 44.1734C83.4904 43.8911 83.0109 43.6371 82.4186 43.383C81.9109 43.1572 81.4878 42.9597 81.1775 42.7621C80.8672 42.5927 80.6134 42.3951 80.4723 42.1976C80.3313 42 80.2467 41.7459 80.2467 41.4355C80.2467 41.1814 80.3031 40.9556 80.4441 40.758C80.557 40.5605 80.7544 40.4193 81.0083 40.3064C81.2621 40.1935 81.5442 40.1371 81.9109 40.1371C82.3622 40.1371 82.7853 40.1935 83.2084 40.3064C83.6314 40.4193 84.0545 40.5605 84.5058 40.758L85.1264 39.1774C84.6187 38.9516 84.1109 38.7822 83.6032 38.6411C83.0955 38.5282 82.5314 38.4435 81.9673 38.4435C81.2339 38.4435 80.6134 38.5564 80.0493 38.8105C79.5133 39.0363 79.062 39.4032 78.78 39.8266C78.4697 40.2782 78.3287 40.8145 78.3287 41.4355C78.3287 41.9153 78.4133 42.3105 78.5543 42.6774C78.6954 43.0161 78.921 43.3266 79.1749 43.5806C79.4287 43.8347 79.7108 44.0605 80.0493 44.2298C80.3595 44.3992 80.698 44.5685 81.0365 44.7097C81.5442 44.9072 81.9673 45.1048 82.3057 45.3024C82.6442 45.5 82.8981 45.6976 83.0673 45.8951C83.2366 46.1209 83.3212 46.375 83.3212 46.6855C83.3212 46.9677 83.2648 47.1935 83.1237 47.4193C82.9827 47.6169 82.7853 47.7863 82.5032 47.8992C82.2211 48.0121 81.8545 48.0685 81.4314 48.0685C80.8672 48.0685 80.3031 47.9839 79.739 47.8145M69.895 38.6411H67.4693V49.621H69.2463V44.0887C69.2463 43.7218 69.2463 43.383 69.2181 43.0161C69.2181 42.6492 69.1899 42.3105 69.1617 41.9718C69.1617 41.633 69.1334 41.3226 69.1052 41.0121H69.1617L74.3516 49.621H76.8055V38.6411H75.0285V44.2298C75.0285 44.5685 75.0285 44.9072 75.0568 45.2459C75.0568 45.6129 75.0568 45.9516 75.085 46.2903C75.085 46.629 75.085 46.9395 75.1132 47.1935H75.0568L69.8668 38.6411H69.895ZM66.3128 38.6411H60.0793V49.621H66.3128V47.9556H62.0537V44.7379H66.059V43.1008H62.0537V40.3064H66.3128V38.6693V38.6411ZM58.7536 38.6411H52.52V49.621H58.7536V47.9556H54.4944V44.7379H58.4997V43.1008H54.4944V40.3064H58.7536V38.6693V38.6411ZM44.2838 38.6411H42.3093V45.7258C42.3093 46.9395 42.676 47.9274 43.4094 48.6613C44.1427 49.3951 45.2146 49.7903 46.6531 49.7903C47.6685 49.7903 48.4865 49.6209 49.1352 49.254C49.784 48.8871 50.2917 48.4072 50.602 47.8145C50.9122 47.1935 51.0815 46.5161 51.0815 45.754V38.6411H49.1352V45.5C49.1352 46.0645 49.0506 46.5161 48.8814 46.9113C48.7121 47.3064 48.4583 47.5887 48.0916 47.7863C47.7249 47.9839 47.2736 48.0685 46.7095 48.0685C45.8915 48.0685 45.2992 47.871 44.8761 47.4476C44.453 47.0242 44.2556 46.375 44.2556 45.5V38.6129L44.2838 38.6411ZM32.8602 44.1169C32.8602 43.2984 32.9731 42.5645 33.1705 42C33.3962 41.4072 33.7346 40.9556 34.1859 40.6451C34.6372 40.3347 35.2296 40.1653 35.9629 40.1653C37.0348 40.1653 37.8245 40.504 38.304 41.2097C38.7836 41.9153 39.0092 42.875 39.0092 44.1169C39.0092 44.9355 38.8964 45.6411 38.6989 46.2339C38.5015 46.8266 38.163 47.2782 37.7117 47.5887C37.2604 47.8992 36.6681 48.0685 35.9629 48.0685C35.2578 48.0685 34.6654 47.8992 34.2141 47.5887C33.7628 47.2782 33.4244 46.8266 33.1987 46.2339C32.9731 45.6411 32.8885 44.9355 32.8885 44.1169M31.3371 41.1532C30.9704 42 30.773 42.9879 30.773 44.1169C30.773 44.9637 30.8858 45.754 31.0833 46.4314C31.2807 47.1371 31.6192 47.7298 32.0423 48.2097C32.4654 48.7177 33.0013 49.0847 33.65 49.3669C34.2988 49.6492 35.0603 49.7621 35.9629 49.7621C35.9911 49.7621 36.0476 49.7621 36.104 49.7621C36.1604 49.7621 36.1886 49.7621 36.245 49.7621L38.2476 52.2459H40.8708L38.2194 49.3669C38.8682 49.1129 39.4041 48.7177 39.8272 48.2379C40.2503 47.7298 40.5605 47.1371 40.7862 46.4314C40.9836 45.7258 41.0965 44.9637 41.0965 44.1169C41.0965 42.9879 40.899 42 40.5323 41.1532C40.1657 40.3064 39.6015 39.6572 38.84 39.1774C38.0784 38.6976 37.1194 38.4718 35.9629 38.4718C34.8065 38.4718 33.8193 38.6976 33.0295 39.1774C32.2679 39.6572 31.7038 40.3064 31.3089 41.1532M21.6906 40.25C22.1983 40.25 22.6214 40.3064 22.9317 40.4193C23.2701 40.5322 23.4958 40.7016 23.6368 40.9556C23.7778 41.1814 23.8625 41.5201 23.8625 41.8871C23.8625 42.508 23.6932 42.9597 23.3265 43.2419C22.9599 43.5242 22.4239 43.6935 21.7188 43.6935H20.5059V40.25H21.6906ZM21.747 38.6411H18.5315V49.5645H20.5059V45.2459H22.1137L24.624 49.5645H26.8805L23.8343 44.7097C24.2009 44.5403 24.5394 44.3427 24.8497 44.0887C25.1599 43.8347 25.4138 43.5242 25.6112 43.1572C25.8087 42.7903 25.8933 42.3387 25.8933 41.8024C25.8933 41.0968 25.7523 40.504 25.442 40.0524C25.1317 39.6008 24.6804 39.2339 24.0599 39.008C23.4394 38.7822 22.6778 38.6693 21.7188 38.6693M9.16702 44.0887C9.16702 43.2701 9.27985 42.5645 9.47729 41.9718C9.70294 41.379 10.0132 40.9274 10.4927 40.6169C10.944 40.3064 11.5363 40.1371 12.2415 40.1371C13.3133 40.1371 14.0749 40.4758 14.5544 41.1814C15.0339 41.8871 15.2596 42.8468 15.2596 44.0887C15.2596 44.9072 15.1467 45.6129 14.9493 46.2056C14.7519 46.7984 14.4134 47.25 13.9621 47.5605C13.5108 47.8709 12.9467 48.0403 12.2133 48.0403C11.4799 48.0403 10.944 47.8709 10.4645 47.5605C10.0132 47.25 9.67473 46.7984 9.44908 46.2056C9.22343 45.6129 9.13881 44.9072 9.13881 44.0887M7.64389 41.125C7.2772 41.9718 7.07976 42.9597 7.07976 44.0605C7.07976 44.9072 7.19259 45.6693 7.39003 46.375C7.58747 47.0806 7.92595 47.6734 8.34904 48.1532C8.77213 48.633 9.30805 49.0282 9.9568 49.3105C10.6055 49.5927 11.3671 49.7056 12.2415 49.7056C13.1159 49.7056 13.8493 49.5645 14.498 49.3105C15.1467 49.0564 15.6827 48.6613 16.1058 48.1532C16.5288 47.6451 16.8391 47.0524 17.0648 46.375C17.2622 45.6976 17.375 44.9355 17.375 44.0887C17.375 42.9597 17.1776 41.9718 16.8109 41.125C16.4442 40.2782 15.8801 39.629 15.1185 39.1774C14.357 38.7258 13.398 38.4718 12.2697 38.4718C11.1415 38.4718 10.126 38.6976 9.36447 39.1774C8.6029 39.629 8.03877 40.3064 7.67209 41.125M6.23357 38.6411H0.0564124V49.5645H1.97444V45.133H5.95151V43.4959H1.97444V40.2782H6.23357V38.6411ZM14.498 28.3669C14.7801 27.2943 14.9211 26.0806 14.9211 24.7822C14.9211 22.7218 14.3288 21.1411 13.1441 20.0685C11.9594 18.9959 10.3517 18.4597 8.29263 18.4597H3.52578L2.34112 24.0766H6.7977L7.16438 22.2984L10.7184 26.8145L5.24636 31.3306L5.61304 29.5524H1.18466L0 35.1976H5.38739C6.60026 35.1976 7.7003 35.0564 8.68752 34.746C9.67473 34.4355 10.5491 33.9839 11.3389 33.4193C12.1005 32.8266 12.7774 32.1209 13.2851 31.2742C13.821 30.4274 14.2159 29.4677 14.498 28.3669ZM26.9934 22.1008L27.7549 18.4597H17.8263L14.3006 35.1976H24.2291L24.9907 31.5282H19.5187L20.1674 28.3669H25.2446L26.0625 24.7258H20.9854L21.5213 22.1008H26.9934ZM36.1604 31.5564H30.6884L33.4526 18.4597H28.9678L25.442 35.1976H35.3706L36.1322 31.5282L36.1604 31.5564ZM53.9021 35.2258L62.1947 18.4879H57.4561L53.4508 27.7177C53.2816 28.0564 53.1123 28.5645 52.8585 29.2419C52.6328 29.9193 52.4354 30.5685 52.2943 31.1895H52.2097C52.2661 30.879 52.3225 30.4556 52.3507 29.9476C52.3507 29.4395 52.3789 28.9032 52.4072 28.3669C52.4072 27.8306 52.4072 27.3508 52.4072 26.9556L52.1251 18.5161H39.9964L39.4605 21.0847L41.2939 22.0726L39.2349 31.7822L37.0348 32.6855L36.4988 35.254H45.0171L45.553 32.6855L43.6914 31.7822L45.7505 22.0726L47.9224 21.1411L48.9378 35.254H53.9303L53.9021 35.2258ZM72.2925 22.1008L73.0541 18.4597H63.1255L59.5997 35.1976H69.5283L70.2899 31.5282H64.8179L65.4666 28.3669H70.5438L71.3617 24.7258H66.2846L66.8205 22.1008H72.2925ZM80.2185 23.3427C80.2185 23.7661 80.1621 24.133 80.021 24.4435C79.88 24.754 79.7108 25.008 79.4851 25.1774C79.2595 25.375 79.0056 25.4879 78.7236 25.6008C78.4415 25.6855 78.1594 25.7419 77.8492 25.7419H77.2568L78.0466 21.9314H78.6671C79.2313 21.9314 79.6544 22.0726 79.88 22.3548C80.1057 22.6371 80.2185 22.9758 80.2185 23.3992M94.5472 21.0564L95.0832 18.4879H86.4803L85.9444 21.0564L87.7778 22.0443L85.7187 31.754L83.5186 32.6572V32.8548L81.4596 28.1976C81.9391 27.9718 82.4468 27.6613 82.9263 27.2661C83.434 26.8709 83.8571 26.3064 84.1674 25.629C84.5058 24.9516 84.6751 24.0766 84.6751 23.0605C84.6751 21.5363 84.1674 20.379 83.1519 19.6169C82.1365 18.8548 80.6698 18.4597 78.7236 18.4597H74.2952L70.7694 35.1976H75.2542L76.5517 29.1008H77.3979L79.6262 35.1976H91.5292L92.0651 32.629L90.2035 31.7258L92.2625 22.0161L94.5472 21.0282V21.0564ZM107.325 35.2258L110.85 18.4879H106.873L105.378 25.4879C105.294 25.883 105.209 26.3347 105.125 26.871C105.04 27.4072 104.955 27.9153 104.899 28.4516C104.843 28.9597 104.758 29.4113 104.73 29.75H104.645L101.373 18.4879H96.1832L92.6574 35.2258H96.6345L98.1012 28.2258C98.1858 27.8589 98.2705 27.4072 98.3269 26.9274C98.4115 26.4476 98.4679 25.9677 98.5243 25.4879C98.5807 25.008 98.6371 24.5847 98.6654 24.2177C98.6936 23.8508 98.7218 23.5968 98.75 23.4274H98.8346L102.135 35.1976H107.325V35.2258ZM124.925 19.4193C124.248 19.0242 123.459 18.7137 122.584 18.5161C121.682 18.3185 120.751 18.2056 119.792 18.2056C118.466 18.2056 117.281 18.4032 116.21 18.7701C115.166 19.1653 114.235 19.6734 113.445 20.3508C112.656 21.0282 112.007 21.8185 111.499 22.6935C110.991 23.5685 110.597 24.5282 110.343 25.5726C110.089 26.5887 109.976 27.6613 109.976 28.7339C109.976 30.9637 110.54 32.629 111.697 33.7298C112.853 34.8589 114.376 35.3951 116.266 35.3951C117.507 35.3951 118.607 35.3105 119.594 35.1129C120.553 34.9153 121.428 34.7177 122.218 34.4637L124.136 25.375H117.14L116.379 28.875H119.002L118.41 31.5282C118.099 31.5847 117.874 31.6411 117.648 31.6693C117.451 31.6693 117.197 31.6976 116.887 31.6976C116.379 31.6976 115.928 31.5847 115.589 31.3871C115.251 31.1895 114.969 30.8508 114.771 30.3992C114.574 29.9476 114.489 29.383 114.489 28.6774C114.489 28.0282 114.574 27.2943 114.771 26.5322C114.94 25.7701 115.251 25.0363 115.646 24.3306C116.04 23.625 116.576 23.0605 117.253 22.6089C117.93 22.1572 118.748 21.9314 119.735 21.9314C120.412 21.9314 121.033 22.0443 121.625 22.2419C122.218 22.4395 122.753 22.6935 123.233 22.9758L124.925 19.4476V19.4193Z" />
</svg>`;var $=`{{!prettier-ignore}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 56" {{#if fill}}fill="{{fill}}"{{/if}} {{#if className}}class="{{className}}"{{/if}} {{#if width}}width="{{width}}"{{/if}}
    {{#if height}}height="{{height}}"{{/if}}>
    <title>Queensland Government</title>
    <path d="M59.8149 21.2275C59.605 21.28 59.1501 21.42 58.8352 21.455C59.43 20.8775 59.7799 20.1775 59.7799 19.6C59.5 19.6875 58.9927 19.88 58.5379 19.985C59.4475 19.215 59.9548 18.305 59.7274 17.115C59.4475 17.255 59.0627 17.4825 58.6603 17.64C59.465 16.415 59.4475 15.33 59.1151 14.7C58.7653 15.0325 58.3279 15.4175 57.8731 15.6975C58.1705 14.28 58.153 13.37 57.5582 12.7225C56.946 13.8775 56.4212 14.735 55.564 15.75C55.634 14.805 55.529 13.6325 54.9167 13.0375C54.9167 13.0375 54.7418 14.35 54.287 14.77C54.182 13.4925 53.7797 12.7925 53.2024 12.11C53.2024 12.11 53.1674 13.44 52.8 14.2625C52.4851 13.1425 51.9254 12.285 51.1906 11.4625C51.2431 13.93 50.5609 18.5675 48.5841 21.7C48.3567 23.555 48.1468 26.3375 45.1379 27.9825C44.7006 27.685 43.9484 27.2825 42.8638 27.3525C42.5839 25.9525 44.4032 24.6925 45.9776 23.6775C47.5695 22.645 48.2517 21.77 48.2342 20.405C48.1993 18.9 47.1846 18.2875 46.135 18.2525C44.6481 18.1825 43.4411 19.53 43.1612 20.09C42.7238 20.3 41.4643 20.685 40.9395 20.825C40.3622 20.9825 39.715 21.21 39.2951 21.56C39.54 21.7175 40.2398 21.77 40.5022 21.7175C41.0095 21.6475 42.6189 21.35 44.1408 21.1575C44.7006 21.455 45.5927 21.9625 44.6481 22.6275C43.3361 23.4675 42.7763 23.6775 40.9395 24.64C38.0356 26.1625 38.9802 29.995 39.68 30.275C39.68 31.57 40.8345 33.8975 41.6217 34.72C41.9716 36.3475 41.4993 38.7625 41.0095 39.7775C40.6071 38.7975 39.9074 36.505 39.4526 35.175C39.9249 32.655 39.1552 31.535 38.6304 31.115C38.1056 30.6775 37.2659 30.8 36.7061 31.675C37.5458 31.5875 37.8257 32.655 37.8082 33.775C37.7907 35.105 37.4408 36.19 36.5137 36.19C36.5836 37.3275 37.8082 37.66 38.4204 37.1C38.5254 37.3625 39.0152 38.85 39.4701 40.18C39.7499 40.9675 40.0123 41.7025 40.1873 42.0875C40.3797 42.5075 41.7967 42.5775 41.9541 42.0875C42.1815 41.44 42.3565 40.95 42.7063 40.18C42.9687 39.6025 43.3536 38.8675 43.9134 37.7825C44.2982 38.4475 44.8055 39.48 45.0854 40.18C45.2254 40.5125 45.3128 40.775 45.3303 40.8975C45.4528 41.9825 45.3828 45.85 45.0854 48.16C41.9191 47.3025 41.0095 48.8425 41.2894 49.9975C41.7442 49.49 42.339 49.56 42.7063 49.8225C42.6189 50.6625 42.8463 51.275 43.7035 51.5375C44.6131 49.1225 47.8844 49.665 48.1993 49.8575C48.2168 49.385 48.6541 48.23 46.9747 47.985C47.0447 45.9025 47.2546 43.3475 47.3246 42.8225C47.3946 42.2975 47.4645 41.965 47.2196 41.125C47.1497 40.88 47.0447 40.565 46.9572 40.1975C46.7298 39.3575 46.5199 38.255 46.5024 37.065C46.7998 37.3625 47.4995 37.59 47.9718 37.485C48.3392 39.06 48.8815 38.605 49.1614 39.27C49.3013 39.6025 49.3363 39.935 49.3713 40.215C49.4063 40.495 49.4588 40.7225 49.5987 40.9325C50.7183 40.9675 51.6804 40.705 52.3627 40.215C52.5726 40.075 52.765 39.9 52.905 39.725C52.6251 38.045 52.1528 37.2225 51.2781 36.2075C51.0507 34.8425 50.4034 33.5825 49.5288 32.4625C50.6308 32.095 51.7504 31.2025 52.3452 30.5725C52.87 30.5375 53.4823 30.1 53.5347 29.225C53.8496 29.19 54.112 29.1725 54.3569 29.12C54.3219 28.875 54.2695 28.525 54.2345 28.315C54.6368 28.315 55.0392 28.2975 55.4065 28.2625C55.3016 27.9475 55.1441 27.615 55.0392 27.37C55.4415 27.37 55.9488 27.335 56.3512 27.3175C56.1413 26.915 55.9663 26.5475 55.8439 26.1975C56.3162 26.145 57.0334 26.04 57.6282 25.9C57.4358 25.7075 57.2259 25.4975 56.8935 25.1825C58.4329 24.7275 59.1151 23.6425 59.1851 23.17C58.9577 23.17 58.4854 23.275 58.2055 23.24C59.1501 22.68 59.7274 21.98 59.8149 21.2275Z" />
    <path d="M28.554 49.595C19.9297 46.375 18.8276 39.305 18.7926 36.085C18.7926 36.085 18.7752 36.085 18.7577 36.085C18.7752 35.9975 18.7752 35.9275 18.7926 35.8575C18.7926 35.1575 18.8451 34.685 18.8626 34.5275C18.8451 34.0725 18.7752 33.705 18.6877 33.4425C18.6702 33.39 18.6352 33.3375 18.6002 33.2675V36.5925C18.6002 40.32 19.9647 43.54 22.6587 46.1475C25.0203 48.44 27.6793 49.5075 28.4315 49.77L28.554 49.805L28.6764 49.77C29.4286 49.49 32.0876 48.44 34.4492 46.1475C37.1432 43.54 38.5077 40.32 38.5077 36.5925V35.98C38.4377 36.085 38.3678 36.155 38.2978 36.2425C38.2278 37.9225 37.9129 40.5125 36.7933 42.4725C35.4813 45.22 33.4346 47.4775 28.554 49.595Z" />
    <path d="M49.2135 51.7474C48.7936 51.8699 48.2688 51.9574 47.4991 51.9574H46.537C43.2307 51.8874 39.837 50.9074 37.7553 48.7724C40.6242 45.8674 37.248 43.4874 35.4287 45.9374C34.8514 46.7074 34.3966 47.2499 34.0117 48.0024C33.6968 48.5974 33.9242 49.2099 34.6415 50.1374C35.0263 50.6449 36.006 51.4324 36.8107 51.9574H20.2969C21.0841 51.4324 22.0637 50.6449 22.4661 50.1374C23.1833 49.2099 23.4282 48.6149 23.0958 48.0024C22.6935 47.2499 22.2387 46.7074 21.6789 45.9374C19.8596 43.4699 16.4833 45.8674 19.3523 48.7724C17.2705 50.9074 13.8768 51.8874 10.5706 51.9574H9.66091C8.8912 51.9574 8.3664 51.8874 7.94656 51.7474C7.26432 51.5899 7.10688 51.8699 7.47424 53.0599C7.71914 53.8299 7.92906 55.1249 8.01653 55.9999H49.1435C49.231 55.1249 49.4409 53.8299 49.6858 53.0424C50.0532 51.8699 49.8957 51.5724 49.2135 51.7474ZM36.3383 46.0424C36.8806 45.3249 37.6678 45.5174 37.9827 46.1124C38.3326 46.7599 37.8253 47.5474 37.143 48.1774C36.2159 47.1624 36.1109 46.3399 36.3383 46.0424ZM34.9739 49.4199C34.6415 48.9474 34.519 48.6849 34.694 48.2299C34.8689 47.7924 35.2188 47.4074 35.5686 46.8649C36.1459 49.1049 39.5221 51.2399 42.0237 51.9574H38.0352C37.0381 51.3799 35.7261 50.4699 34.9739 49.4199ZM19.1073 46.1124C19.4397 45.5174 20.2269 45.3249 20.7517 46.0424C20.9791 46.3574 20.8742 47.1624 19.947 48.1774C19.2648 47.5474 18.7575 46.7599 19.1073 46.1124ZM21.5214 46.8474C21.8888 47.3899 22.2387 47.7924 22.3961 48.2124C22.571 48.6674 22.4661 48.9474 22.1337 49.4024C21.3815 50.4524 20.0695 51.3624 19.0374 51.9224H15.0664C17.5679 51.2399 20.9442 49.0874 21.5214 46.8474ZM48.4263 55.3524H8.73376C8.55883 54.0924 8.31392 53.2699 8.104 52.5874H49.0735C48.8461 53.2699 48.6012 54.0924 48.4263 55.3524Z" />
    <path d="M40.1875 53.76C40.1875 53.41 40.1875 53.34 40.1875 53.27C40.1875 53.1825 40.205 53.1475 40.275 53.13C40.31 53.13 40.345 53.13 40.3625 53.13C40.3976 53.13 40.3976 53.13 40.3976 53.1125C40.3976 53.095 40.38 53.095 40.345 53.095C40.2575 53.095 40.0825 53.095 40.03 53.095C39.9599 53.095 39.8199 53.095 39.7149 53.095C39.6799 53.095 39.6624 53.095 39.6624 53.1125C39.6624 53.13 39.6799 53.13 39.6974 53.13C39.7324 53.13 39.7499 53.13 39.7849 53.13C39.8549 53.1475 39.8724 53.1825 39.8899 53.27C39.8899 53.34 39.8899 53.41 39.8899 53.76V54.18C39.8899 54.39 39.8899 54.5825 39.8724 54.6875C39.8549 54.7575 39.8549 54.81 39.8024 54.8275C39.7849 54.8275 39.7499 54.8275 39.7149 54.8275C39.6799 54.8275 39.6799 54.845 39.6799 54.845C39.6799 54.8625 39.6974 54.8625 39.7324 54.8625C39.8199 54.8625 39.9774 54.8625 40.03 54.8625C40.2225 54.8625 40.38 54.88 40.7126 54.88C40.8352 54.88 40.8527 54.8625 40.8527 54.81C40.8702 54.74 40.8877 54.565 40.8877 54.53C40.8877 54.495 40.8877 54.495 40.8702 54.495C40.8527 54.495 40.8527 54.5125 40.8527 54.53C40.8527 54.5825 40.8177 54.635 40.7827 54.67C40.7301 54.7225 40.6251 54.74 40.5026 54.74C40.3275 54.74 40.2575 54.7225 40.2225 54.6875C40.17 54.635 40.17 54.4775 40.17 54.18V53.76H40.1875Z" />
    <path d="M43.2657 54.8975C43.3881 54.8975 43.528 54.88 43.633 54.81C43.8079 54.705 43.8603 54.53 43.8603 54.4075C43.8603 54.18 43.7554 54.0225 43.4756 53.8125L43.4056 53.76C43.2132 53.62 43.1608 53.5325 43.1608 53.4275C43.1608 53.2875 43.2657 53.1825 43.4406 53.1825C43.598 53.1825 43.6679 53.2525 43.7029 53.305C43.7554 53.3575 43.7729 53.445 43.7729 53.4625C43.7729 53.4975 43.7904 53.4975 43.7904 53.4975C43.8079 53.4975 43.8079 53.48 43.8079 53.4275C43.8079 53.2525 43.8254 53.1825 43.8254 53.1475C43.8254 53.13 43.8079 53.13 43.7904 53.1125C43.7379 53.095 43.633 53.0775 43.4756 53.0775C43.1433 53.0775 42.9334 53.27 42.9334 53.515C42.9334 53.7075 43.0208 53.865 43.2832 54.075L43.3881 54.1625C43.5805 54.32 43.6155 54.425 43.6155 54.5475C43.6155 54.67 43.5105 54.81 43.3007 54.81C43.1608 54.81 43.0208 54.74 42.9684 54.565C42.9509 54.53 42.9509 54.4775 42.9509 54.4425C42.9509 54.425 42.9509 54.39 42.9334 54.39C42.9159 54.39 42.9159 54.425 42.8984 54.46C42.8984 54.495 42.8809 54.635 42.8809 54.7575C42.8809 54.81 42.8809 54.8275 42.9334 54.845C43.0208 54.88 43.1258 54.8975 43.2657 54.8975Z" />
    <path d="M41.639 54.18C41.639 54.4075 41.639 54.6 41.6215 54.705C41.6215 54.775 41.604 54.81 41.5515 54.8275C41.534 54.8275 41.4991 54.8275 41.4641 54.8275C41.4291 54.8275 41.4291 54.845 41.4291 54.845C41.4291 54.8625 41.4466 54.8625 41.4816 54.8625C41.5865 54.8625 41.7264 54.8625 41.7789 54.8625C41.8489 54.8625 41.9888 54.8625 42.1462 54.8625C42.1637 54.8625 42.1986 54.8625 42.1986 54.845C42.1986 54.8275 42.1812 54.8275 42.1637 54.8275C42.1287 54.8275 42.0762 54.8275 42.0412 54.8275C41.9713 54.81 41.9538 54.775 41.9538 54.705C41.9363 54.6 41.9363 54.425 41.9363 54.18V53.76C41.9363 53.41 41.9363 53.34 41.9363 53.27C41.9363 53.1825 41.9538 53.1475 42.0238 53.13C42.0587 53.13 42.0587 53.13 42.0937 53.13C42.1287 53.13 42.1287 53.13 42.1287 53.095C42.1287 53.0775 42.1112 53.0775 42.0762 53.0775C41.9888 53.0775 41.8489 53.0775 41.7964 53.0775C41.7264 53.0775 41.5865 53.0775 41.4816 53.0775C41.4466 53.0775 41.4291 53.0775 41.4291 53.095C41.4291 53.1125 41.4466 53.13 41.4641 53.13C41.4991 53.13 41.534 53.13 41.5515 53.13C41.604 53.1475 41.6215 53.1825 41.639 53.27C41.639 53.34 41.639 53.41 41.639 53.76V54.18Z" />
    <path d="M35.5513 54.18C35.5513 54.39 35.5513 54.5825 35.5338 54.6875C35.5338 54.7575 35.5163 54.81 35.4638 54.81C35.4463 54.81 35.4113 54.81 35.3763 54.81C35.3588 54.81 35.3413 54.81 35.3413 54.8275C35.3413 54.845 35.3588 54.845 35.3938 54.845C35.4813 54.845 35.6387 54.845 35.6912 54.845C35.8137 54.845 36.0236 54.8625 36.1985 54.8625C36.6359 54.8625 36.8808 54.705 36.9857 54.5825C37.1257 54.4425 37.2481 54.215 37.2481 53.935C37.2481 53.655 37.1432 53.4625 37.0207 53.34C36.7583 53.0775 36.3735 53.0775 36.0761 53.0775C35.9361 53.0775 35.7787 53.0775 35.7087 53.0775C35.6387 53.0775 35.4988 53.0775 35.3763 53.0775C35.3413 53.0775 35.3239 53.0775 35.3239 53.095C35.3239 53.1125 35.3413 53.1125 35.3588 53.1125C35.3938 53.1125 35.4288 53.1125 35.4463 53.1125C35.5163 53.13 35.5338 53.165 35.5513 53.2525C35.5513 53.3225 35.5513 53.3925 35.5513 53.7425V54.18V54.18ZM35.8487 53.725V53.2525C35.8487 53.235 35.8661 53.2175 35.8836 53.2C35.9011 53.2 35.9886 53.1825 36.0411 53.1825C36.2335 53.1825 36.4959 53.2175 36.7058 53.4275C36.8108 53.5325 36.9332 53.7075 36.9332 54.005C36.9332 54.25 36.8808 54.46 36.7408 54.6C36.6009 54.7225 36.4434 54.775 36.1985 54.775C36.0061 54.775 35.9186 54.7225 35.8836 54.6875C35.8661 54.6525 35.8661 54.565 35.8487 54.5125C35.8487 54.46 35.8487 54.285 35.8487 54.04V53.725Z" />
    <path d="M34.1343 54.18C34.1343 54.4075 34.1343 54.6 34.1168 54.705C34.1168 54.775 34.0993 54.81 34.0469 54.8275C34.0294 54.8275 33.9944 54.8275 33.9594 54.8275C33.9244 54.8275 33.9244 54.845 33.9244 54.845C33.9244 54.8625 33.9419 54.8625 33.9769 54.8625C34.0644 54.8625 34.2218 54.8625 34.2742 54.8625C34.3442 54.8625 34.4841 54.8625 34.6415 54.8625C34.659 54.8625 34.6765 54.8625 34.6765 54.845C34.6765 54.8275 34.659 54.8275 34.6415 54.8275C34.6065 54.8275 34.5541 54.8275 34.5191 54.8275C34.4491 54.81 34.4316 54.775 34.4316 54.705C34.4316 54.6 34.4316 54.425 34.4316 54.18V53.76C34.4316 53.41 34.4316 53.34 34.4316 53.27C34.4316 53.1825 34.4491 53.1475 34.5191 53.13C34.5366 53.13 34.5716 53.13 34.589 53.13C34.6065 53.13 34.624 53.13 34.624 53.095C34.624 53.0775 34.6065 53.0775 34.5716 53.0775C34.4841 53.0775 34.3442 53.0775 34.2917 53.0775C34.2218 53.0775 34.0818 53.0775 33.9944 53.0775C33.9594 53.0775 33.9419 53.0775 33.9419 53.095C33.9419 53.1125 33.9594 53.13 33.9769 53.13C33.9944 53.13 34.0294 53.13 34.0644 53.13C34.1168 53.1475 34.1343 53.1825 34.1518 53.27C34.1518 53.34 34.1518 53.41 34.1518 53.76V54.18H34.1343Z" />
    <path d="M32.6304 53.9875C32.6304 53.97 32.6304 53.97 32.6479 53.97C32.6829 53.97 32.928 53.97 32.998 53.9875C33.068 53.9875 33.1031 54.04 33.1206 54.075C33.1206 54.11 33.1381 54.1275 33.1381 54.145C33.1381 54.1625 33.1381 54.18 33.1556 54.18C33.1731 54.18 33.1731 54.1625 33.1731 54.1275C33.1731 54.11 33.1731 54.005 33.1906 53.9525C33.1906 53.8825 33.2081 53.83 33.2081 53.8125C33.2081 53.795 33.2081 53.795 33.1906 53.795C33.1731 53.795 33.1731 53.8125 33.1556 53.8125C33.1381 53.8475 33.1031 53.8475 33.0505 53.8475C33.0155 53.8475 32.9805 53.8475 32.9455 53.8475H32.6479C32.6304 53.8475 32.6304 53.8475 32.6304 53.83V53.2525C32.6304 53.235 32.6479 53.2175 32.6479 53.2175L33.0155 53.235C33.1031 53.235 33.1556 53.27 33.1731 53.305C33.1906 53.34 33.1906 53.375 33.1906 53.3925C33.1906 53.4275 33.1906 53.4275 33.2081 53.4275C33.2256 53.4275 33.2256 53.41 33.2256 53.3925C33.2256 53.3575 33.2256 53.2175 33.2431 53.2C33.2606 53.1475 33.2606 53.1125 33.2606 53.095C33.2606 53.0775 33.2606 53.0775 33.2431 53.0775C33.2256 53.0775 33.2256 53.095 33.2081 53.095C33.1906 53.095 33.1556 53.095 33.1031 53.095H32.4904C32.4204 53.095 32.2803 53.095 32.1578 53.095C32.1228 53.095 32.1053 53.095 32.1053 53.1125C32.1053 53.13 32.1228 53.13 32.1403 53.13C32.1753 53.13 32.2103 53.13 32.2278 53.13C32.2978 53.1475 32.3153 53.1825 32.3328 53.27C32.3328 53.34 32.3328 53.41 32.3328 53.76V54.18C32.3328 54.4075 32.3328 54.5825 32.3153 54.6875C32.2978 54.7575 32.2978 54.81 32.2453 54.81C32.2278 54.81 32.1928 54.81 32.1578 54.81C32.1228 54.81 32.1228 54.8275 32.1228 54.8275C32.1228 54.845 32.1403 54.845 32.1753 54.845C32.2628 54.845 32.4029 54.845 32.4729 54.845C32.5429 54.845 32.6829 54.845 32.823 54.845C32.858 54.845 32.8755 54.845 32.8755 54.8275C32.8755 54.81 32.858 54.81 32.8405 54.81C32.8055 54.81 32.753 54.81 32.718 54.81C32.6479 54.7925 32.6304 54.74 32.6304 54.6875C32.6129 54.5825 32.6129 54.4075 32.6129 54.18V53.9875H32.6304Z" />
    <path d="M17.7257 54.18C17.7257 54.39 17.7257 54.5825 17.7082 54.6875C17.7082 54.7575 17.6908 54.81 17.6383 54.81C17.6208 54.81 17.5858 54.81 17.5508 54.81C17.5158 54.81 17.5158 54.81 17.5158 54.8275C17.5158 54.845 17.5333 54.845 17.5683 54.845C17.6558 54.845 17.8132 54.845 17.8657 54.845C17.9881 54.845 18.1981 54.8625 18.373 54.8625C18.8103 54.8625 19.0552 54.705 19.1602 54.5825C19.3001 54.4425 19.4226 54.215 19.4226 53.935C19.4226 53.655 19.3176 53.4625 19.1952 53.34C18.9328 53.0775 18.5479 53.0775 18.2505 53.0775C18.1106 53.0775 17.9532 53.0775 17.8832 53.0775C17.8132 53.0775 17.6733 53.0775 17.5333 53.0775C17.4983 53.0775 17.4808 53.0775 17.4808 53.095C17.4808 53.1125 17.4983 53.1125 17.5158 53.1125C17.5508 53.1125 17.5858 53.1125 17.6208 53.1125C17.6908 53.13 17.7082 53.165 17.7257 53.2525C17.7257 53.3225 17.7257 53.3925 17.7257 53.7425V54.18ZM18.0231 53.725C18.0231 53.55 18.0231 53.34 18.0231 53.2525C18.0231 53.235 18.0406 53.2175 18.0581 53.2C18.0756 53.2 18.1631 53.1825 18.2156 53.1825C18.408 53.1825 18.6704 53.2175 18.8803 53.4275C18.9853 53.5325 19.1077 53.7075 19.1077 54.005C19.1077 54.25 19.0552 54.46 18.9153 54.6C18.7753 54.7225 18.6179 54.775 18.373 54.775C18.1806 54.775 18.0931 54.7225 18.0581 54.6875C18.0406 54.6525 18.0406 54.565 18.0406 54.5125C18.0406 54.46 18.0406 54.285 18.0406 54.04V53.725H18.0231Z" />
    <path d="M15.2765 54.11C15.2765 54.4425 15.364 54.6175 15.4864 54.74C15.6614 54.8975 15.8888 54.8975 16.0112 54.8975C16.1687 54.8975 16.3436 54.88 16.501 54.7225C16.6935 54.565 16.7285 54.285 16.7285 54.005V53.76C16.7285 53.41 16.7285 53.34 16.7285 53.27C16.7285 53.1825 16.7459 53.1475 16.8159 53.13C16.8509 53.13 16.8684 53.13 16.8859 53.13C16.9209 53.13 16.9209 53.13 16.9209 53.1125C16.9209 53.095 16.9034 53.095 16.8684 53.095C16.7809 53.095 16.6235 53.095 16.606 53.095C16.606 53.095 16.4661 53.095 16.3436 53.095C16.3086 53.095 16.2911 53.095 16.2911 53.1125C16.2911 53.13 16.3086 53.13 16.3261 53.13C16.3436 53.13 16.3961 53.13 16.4136 53.13C16.4835 53.1475 16.501 53.1825 16.5185 53.27C16.5185 53.34 16.5185 53.41 16.5185 53.76V54.0575C16.5185 54.3025 16.5185 54.5125 16.3786 54.635C16.2736 54.7225 16.1512 54.7575 16.0462 54.7575C15.9587 54.7575 15.8538 54.74 15.7488 54.6525C15.6264 54.5475 15.5739 54.4075 15.5739 54.075V53.7425C15.5739 53.3925 15.5739 53.3225 15.5739 53.2525C15.5739 53.165 15.6089 53.13 15.6614 53.1125C15.6963 53.1125 15.6963 53.1125 15.7313 53.1125C15.7488 53.1125 15.7663 53.1125 15.7663 53.095C15.7663 53.0775 15.7488 53.0775 15.7138 53.0775C15.6264 53.0775 15.4864 53.0775 15.4164 53.0775C15.3465 53.0775 15.189 53.0775 15.0666 53.0775C15.0316 53.0775 15.0141 53.0775 15.0141 53.095C15.0141 53.1125 15.0316 53.1125 15.0491 53.1125C15.0841 53.1125 15.1191 53.1125 15.1366 53.1125C15.224 53.13 15.2415 53.165 15.2415 53.2525C15.2415 53.3225 15.2415 53.3925 15.2415 53.7425V54.11H15.2765Z" />
    <path d="M38.0528 54.18C38.0528 54.39 38.0528 54.5825 38.0353 54.6875C38.0178 54.7575 38.0178 54.81 37.9652 54.81C37.9477 54.81 37.9127 54.81 37.8777 54.81C37.8427 54.81 37.8427 54.8275 37.8427 54.8275C37.8427 54.845 37.8602 54.845 37.8952 54.845C37.9828 54.845 38.1403 54.845 38.1928 54.845C38.3328 54.845 38.4904 54.8625 38.8405 54.8625C38.928 54.8625 38.9455 54.8625 38.963 54.7925C38.9805 54.74 38.998 54.5825 38.998 54.53C38.998 54.5125 38.998 54.4775 38.9805 54.4775C38.963 54.4775 38.963 54.495 38.963 54.5125C38.9455 54.6 38.9105 54.6525 38.858 54.6875C38.8055 54.7225 38.7004 54.7225 38.6304 54.7225C38.3854 54.7225 38.3504 54.6875 38.3504 54.53C38.3504 54.46 38.3504 54.25 38.3504 54.1625V53.97C38.3504 53.9525 38.3504 53.9525 38.3679 53.9525C38.4204 53.9525 38.6479 53.9525 38.7004 53.9525C38.788 53.9525 38.823 53.9875 38.8405 54.04C38.8405 54.075 38.8405 54.11 38.858 54.1275C38.858 54.145 38.858 54.145 38.8755 54.145C38.893 54.145 38.893 54.1275 38.893 54.11C38.893 54.0925 38.893 54.005 38.9105 53.9525C38.9105 53.83 38.928 53.795 38.928 53.7775C38.928 53.76 38.9105 53.76 38.9105 53.76C38.893 53.76 38.893 53.7775 38.8755 53.795C38.858 53.8125 38.823 53.83 38.7705 53.83C38.718 53.83 38.4379 53.83 38.4029 53.83C38.3854 53.83 38.3854 53.83 38.3854 53.8125V53.2175C38.3854 53.2 38.3854 53.2 38.4029 53.2C38.4554 53.2 38.7004 53.2 38.7355 53.2175C38.858 53.235 38.8755 53.2525 38.893 53.305C38.9105 53.34 38.9105 53.375 38.9105 53.3925C38.9105 53.41 38.9105 53.4275 38.928 53.4275C38.9455 53.4275 38.9455 53.41 38.9455 53.3925C38.9455 53.3575 38.963 53.2525 38.963 53.235C38.963 53.13 38.9805 53.095 38.9805 53.0775C38.9805 53.06 38.9805 53.06 38.963 53.06C38.9455 53.06 38.9455 53.0775 38.928 53.0775C38.9105 53.0775 38.8755 53.095 38.823 53.095H38.2278C38.1578 53.095 38.0178 53.095 37.8952 53.095C37.8602 53.095 37.8427 53.095 37.8427 53.1125C37.8427 53.13 37.8602 53.13 37.8777 53.13C37.9127 53.13 37.9477 53.13 37.9652 53.13C38.0528 53.1475 38.0703 53.1825 38.0703 53.27C38.0703 53.34 38.0703 53.41 38.0703 53.76V54.18H38.0528Z" />
    <path d="M28.5364 54.18C28.5364 54.39 28.5364 54.5825 28.5189 54.6875C28.5189 54.7575 28.5014 54.81 28.449 54.81C28.4315 54.81 28.3965 54.81 28.3615 54.81C28.3265 54.81 28.3265 54.8275 28.3265 54.8275C28.3265 54.845 28.344 54.845 28.379 54.845C28.4839 54.845 28.6239 54.845 28.6764 54.845C28.7463 54.845 28.8863 54.845 29.0437 54.845C29.0612 54.845 29.0787 54.845 29.0787 54.8275C29.0787 54.81 29.0612 54.81 29.0437 54.81C29.0088 54.81 28.9563 54.81 28.9213 54.81C28.8513 54.7925 28.8338 54.74 28.8338 54.6875C28.8163 54.5825 28.8163 54.39 28.8163 54.18V53.2175H29.1137C29.3236 53.2175 29.3936 53.2875 29.3936 53.3575V53.375C29.3936 53.41 29.4111 53.4275 29.4286 53.4275C29.4461 53.4275 29.4461 53.41 29.4461 53.3925C29.4461 53.3225 29.4461 53.165 29.4461 53.13C29.4461 53.095 29.4461 53.0775 29.4286 53.0775C29.4111 53.0775 29.3586 53.095 29.2012 53.095H28.274C28.2041 53.095 28.0991 53.095 28.0466 53.095C27.9941 53.095 27.9591 53.06 27.9417 53.06C27.9242 53.06 27.9242 53.0775 27.9067 53.1125C27.9067 53.13 27.8542 53.34 27.8542 53.375C27.8542 53.41 27.8542 53.41 27.8717 53.41C27.8892 53.41 27.8892 53.3925 27.8892 53.375C27.8892 53.3575 27.9067 53.3225 27.9242 53.2875C27.9591 53.235 28.0116 53.2175 28.1516 53.2175H28.5014V54.18H28.5364Z" />
    <path d="M23.2537 53.3225C23.3237 53.2175 23.3762 53.1475 23.4286 53.13C23.4636 53.13 23.4986 53.1125 23.5161 53.1125C23.5336 53.1125 23.5511 53.095 23.5511 53.095C23.5511 53.0775 23.5336 53.0775 23.5161 53.0775C23.4286 53.0775 23.3412 53.0775 23.2887 53.0775C23.2537 53.0775 23.1487 53.0775 23.0613 53.0775C23.0263 53.0775 23.0088 53.0775 23.0088 53.095C23.0088 53.1125 23.0263 53.1125 23.0438 53.1125C23.0613 53.1125 23.0963 53.1125 23.1138 53.1125C23.1313 53.1125 23.1487 53.13 23.1487 53.1475C23.1487 53.165 23.1487 53.2 23.1313 53.235C23.0963 53.305 22.8863 53.62 22.8164 53.725C22.7289 53.5675 22.6239 53.3925 22.519 53.2C22.5015 53.1825 22.5015 53.1475 22.5015 53.13C22.5015 53.1125 22.5015 53.095 22.5365 53.095C22.554 53.095 22.589 53.095 22.6065 53.095C22.6239 53.095 22.6414 53.095 22.6414 53.0775C22.6414 53.06 22.6239 53.06 22.589 53.06C22.5015 53.06 22.3615 53.06 22.3441 53.06C22.2391 53.06 22.0467 53.06 21.9942 53.06C21.9592 53.06 21.9417 53.06 21.9417 53.0775C21.9417 53.095 21.9417 53.095 21.9592 53.095C21.9767 53.095 22.0292 53.095 22.0642 53.1125C22.1516 53.13 22.2041 53.2 22.2566 53.2875L22.6589 53.9525L22.2041 54.6C22.1166 54.7225 22.0816 54.7575 22.0117 54.775C21.9767 54.7925 21.9417 54.7925 21.9242 54.7925C21.9067 54.7925 21.8892 54.81 21.8892 54.81C21.8892 54.8275 21.9067 54.8275 21.9242 54.8275H21.9592C21.9942 54.8275 22.1166 54.8275 22.1516 54.8275C22.2041 54.8275 22.3615 54.8275 22.379 54.8275H22.414C22.449 54.8275 22.4665 54.8275 22.4665 54.81C22.4665 54.7925 22.449 54.7925 22.4315 54.7925C22.414 54.7925 22.3965 54.7925 22.379 54.7925C22.3615 54.7925 22.3266 54.775 22.3266 54.7575C22.3266 54.7225 22.344 54.705 22.3615 54.6525L22.7114 54.0925C22.8164 54.2675 22.9563 54.495 23.0788 54.7225C23.0963 54.7575 23.0788 54.775 23.0788 54.775C23.0613 54.775 23.0438 54.7925 23.0438 54.7925C23.0438 54.81 23.0613 54.8275 23.1313 54.8275C23.3062 54.8275 23.4986 54.8275 23.5511 54.8275H23.6211C23.6561 54.8275 23.6735 54.8275 23.6735 54.81C23.6735 54.7925 23.6561 54.7925 23.6386 54.7925C23.6211 54.7925 23.5861 54.7925 23.5511 54.775C23.4811 54.7575 23.4461 54.7225 23.4111 54.67C23.3587 54.6 22.9738 53.9525 22.9038 53.8475L23.2537 53.3225Z" />
    <path d="M27.1022 54.46C27.1197 54.46 27.1197 54.46 27.1197 54.4775L27.2247 54.775C27.2422 54.81 27.2247 54.8275 27.2072 54.8275C27.1897 54.8275 27.1722 54.8275 27.1722 54.845C27.1722 54.8625 27.2072 54.8625 27.2422 54.8625C27.4346 54.8625 27.592 54.8625 27.6795 54.8625C27.767 54.8625 27.7845 54.8625 27.7845 54.845C27.7845 54.8275 27.767 54.8275 27.7495 54.8275C27.7145 54.8275 27.6795 54.8275 27.6445 54.8275C27.592 54.81 27.5221 54.7925 27.4346 54.565C27.2771 54.215 26.9098 53.2525 26.8573 53.1125C26.8398 53.06 26.8223 53.0425 26.7873 53.0425C26.7698 53.0425 26.7523 53.0775 26.7174 53.1475L26.1226 54.6175C26.0701 54.74 26.0351 54.81 25.9302 54.8275C25.9127 54.8275 25.8777 54.8275 25.8602 54.8275C25.8427 54.8275 25.8252 54.8275 25.8252 54.845C25.8252 54.8625 25.8427 54.8625 25.8777 54.8625C26.0001 54.8625 26.1226 54.8625 26.1576 54.8625C26.2275 54.8625 26.3325 54.8625 26.4025 54.8625C26.4375 54.8625 26.4375 54.8625 26.4375 54.845C26.4375 54.8275 26.4375 54.8275 26.4025 54.8275H26.3675C26.2975 54.8275 26.28 54.7925 26.28 54.7575C26.28 54.74 26.2975 54.67 26.315 54.6175L26.3675 54.495C26.3675 54.4775 26.385 54.4775 26.385 54.4775H27.1022V54.46ZM26.4725 54.3375C26.455 54.3375 26.455 54.3375 26.455 54.32L26.7523 53.5325C26.7523 53.5325 26.7523 53.515 26.7698 53.515C26.7698 53.515 26.7698 53.5325 26.7873 53.5325L27.0847 54.32C27.0847 54.32 27.0847 54.3375 27.0672 54.3375H26.4725Z" />
    <path d="M20.962 54.46C20.9795 54.46 20.9795 54.46 20.9795 54.4775L21.0845 54.775C21.102 54.81 21.0845 54.8275 21.067 54.8275C21.0495 54.8275 21.032 54.8275 21.032 54.845C21.032 54.8625 21.067 54.8625 21.102 54.8625C21.2944 54.8625 21.4693 54.8625 21.5393 54.8625C21.6268 54.8625 21.6443 54.8625 21.6443 54.845C21.6443 54.8275 21.6268 54.8275 21.6093 54.8275C21.5743 54.8275 21.5393 54.8275 21.5043 54.8275C21.4518 54.81 21.3819 54.7925 21.2944 54.565C21.137 54.215 20.7696 53.2525 20.6996 53.1125C20.6821 53.06 20.6646 53.0425 20.6471 53.0425C20.6296 53.0425 20.6121 53.0775 20.5772 53.1475L19.9824 54.6175C19.9299 54.74 19.8949 54.81 19.79 54.8275C19.7725 54.8275 19.7375 54.8275 19.72 54.8275C19.7025 54.8275 19.685 54.8275 19.685 54.845C19.685 54.8625 19.7025 54.8625 19.7375 54.8625C19.8599 54.8625 19.9824 54.8625 20.0174 54.8625C20.0873 54.8625 20.1923 54.8625 20.2623 54.8625C20.2973 54.8625 20.2973 54.8625 20.2973 54.845C20.2973 54.8275 20.2973 54.8275 20.2623 54.8275H20.2273C20.1573 54.8275 20.1398 54.7925 20.1398 54.7575C20.1398 54.74 20.1573 54.67 20.1748 54.6175L20.2273 54.495C20.2273 54.4775 20.2448 54.4775 20.2448 54.4775H20.962V54.46ZM20.3148 54.3375C20.3148 54.3375 20.2973 54.3375 20.3148 54.32L20.6121 53.5325L20.6296 53.515L20.6471 53.5325L20.9445 54.32C20.9445 54.3375 20.9445 54.3375 20.927 54.3375H20.3148Z" />
    <path d="M14.1046 54.46C14.1046 54.46 14.1221 54.46 14.1221 54.4775L14.2271 54.775C14.2446 54.81 14.2271 54.8275 14.2096 54.8275C14.1921 54.8275 14.1746 54.8275 14.1746 54.845C14.1746 54.8625 14.2096 54.8625 14.2446 54.8625C14.437 54.8625 14.6119 54.8625 14.6819 54.8625C14.7694 54.8625 14.7868 54.8625 14.7868 54.845C14.7868 54.8275 14.7694 54.8275 14.7519 54.8275C14.7169 54.8275 14.6819 54.8275 14.6469 54.8275C14.5944 54.81 14.5244 54.7925 14.437 54.565C14.2795 54.215 13.9122 53.2525 13.8597 53.1125C13.8597 53.06 13.8597 53.025 13.8247 53.025C13.8072 53.025 13.7897 53.06 13.7547 53.13L13.1775 54.6C13.125 54.7225 13.09 54.7925 12.985 54.81C12.9675 54.81 12.9325 54.81 12.9151 54.81C12.8976 54.81 12.8801 54.81 12.8801 54.8275C12.8801 54.845 12.8976 54.845 12.9325 54.845C13.055 54.845 13.1775 54.845 13.2124 54.845C13.2824 54.845 13.3874 54.845 13.4573 54.845C13.4748 54.845 13.4923 54.845 13.4923 54.8275C13.4923 54.81 13.4923 54.81 13.4573 54.81H13.4049C13.3349 54.81 13.3174 54.775 13.3174 54.74C13.3174 54.7225 13.3349 54.6525 13.3524 54.6L13.4049 54.4775C13.4049 54.46 13.4224 54.46 13.4224 54.46H14.1046ZM13.4748 54.3375C13.4573 54.3375 13.4573 54.3375 13.4573 54.32L13.7547 53.5325L13.7722 53.515C13.7722 53.515 13.7722 53.5325 13.7897 53.5325L14.0871 54.32C14.0871 54.3375 14.0871 54.3375 14.0696 54.3375H13.4748Z" />
    <path d="M36.181 36.1725L36.1635 35.8225H36.5133C36.9857 35.8225 37.2306 35.3675 37.353 34.825C35.4987 34.8075 28.8862 34.8425 28.8862 34.8425V41.6675C29.446 41.265 29.9708 40.915 30.6706 40.705V39.515V39.2H30.9854H31.3703C31.4053 37.555 31.8076 36.3475 32.5773 35.56L32.8047 35.3325L33.0322 35.56C33.8019 36.3475 34.1867 37.5375 34.2392 39.2H34.6416H34.9564V39.515V40.7925C35.7086 41.1075 36.216 41.58 36.6183 42.0875C37.2481 40.81 37.7029 39.34 37.8603 37.6425C37.8253 37.6425 37.7904 37.66 37.7554 37.66C37.0032 37.66 36.2335 37.1525 36.181 36.1725Z" />
    <path d="M32.7698 41.0375C30.758 41.0375 29.9883 41.5975 28.8862 42.4375V48.965C28.8862 48.965 33.6444 47.32 36.2509 42.7175C35.6387 41.8425 34.764 41.0375 32.7698 41.0375ZM34.4141 43.68L33.8194 42.9975L32.8048 43.9075L33.2246 44.38C33.2246 44.38 33.6619 44.17 34.0293 44.625C33.7494 44.87 33.2421 45.3075 32.9622 45.5525C32.5773 45.115 32.8397 44.7125 32.8397 44.7125L32.4199 44.24L31.1604 45.36L30.758 44.8875L32.035 43.8025L31.5802 43.2775C31.5802 43.2775 31.4053 43.435 31.1604 43.645C30.793 43.225 30.5131 42.665 30.7755 41.965C31.5102 41.79 32.0175 42.1575 32.3849 42.5775C32.14 42.805 31.9651 42.945 31.9651 42.945L32.4374 43.4875L33.487 42.6125L32.8922 41.9125C33.4345 41.8425 33.9068 42.035 34.1867 42.35C34.4141 42.665 34.5541 43.155 34.4141 43.68Z" />
    <path d="M37.8265 34.825C37.8265 34.825 37.774 34.825 37.6865 34.825C37.5289 35.6125 37.1613 36.155 36.5137 36.155C36.5662 36.925 37.1613 37.3275 37.7215 37.3275C37.774 37.3275 37.809 37.31 37.8615 37.31C37.8965 36.5225 37.9141 35.7 37.8265 34.825Z" />
    <path d="M20.1052 34.7725C19.6326 34.7725 19.3175 34.7725 19.3175 34.79C19.195 36.155 19.2475 37.3975 19.44 38.535C19.9302 37.73 20.4203 36.925 20.3853 36.365C20.3678 35.77 20.2277 35.245 20.1052 34.7725Z" />
    <path d="M20.4371 34.7725C20.5596 35.245 20.6995 35.77 20.717 36.3475C20.7345 37.0125 20.2447 37.835 19.7199 38.71C19.6499 38.815 19.5975 38.9025 19.545 39.0075C21.0494 46.4625 28.2567 48.9475 28.2567 48.9475V34.79C28.2742 34.79 22.8512 34.7725 20.4371 34.7725ZM25.8426 43.6275C25.4927 43.6975 24.9155 43.75 24.5306 43.75C24.1457 43.75 23.586 43.715 23.2186 43.6275C23.2536 43.47 23.3061 43.26 23.3585 43.05C23.0961 43.0325 22.8162 42.9275 22.5888 42.84C22.6938 42.455 22.8687 42.07 23.0087 41.545C23.4985 41.65 23.9708 41.7025 24.5131 41.7025C25.0554 41.7025 25.5277 41.6675 26.0175 41.545C26.1575 42.07 26.3324 42.455 26.4549 42.84C26.245 42.91 25.9651 43.015 25.6852 43.05C25.7551 43.26 25.8076 43.47 25.8426 43.6275ZM22.9037 40.53C23.1661 40.425 24.2332 40.39 24.5481 40.39C24.863 40.39 25.9126 40.4425 26.1925 40.53C26.2275 40.67 26.2275 40.8625 26.21 41.02C25.8076 41.1425 25.0904 41.195 24.5656 41.195C24.0233 41.195 23.3236 41.125 22.9212 41.02C22.8687 40.8625 22.8687 40.67 22.9037 40.53ZM26.9097 37.7475C26.5074 38.6925 26.1225 39.69 26 39.9875C25.7901 39.9525 25.5627 39.935 25.3353 39.9175C25.5977 39.0775 25.9301 37.8875 26.21 37.135C26.3849 36.61 27.2771 36.855 26.9097 37.7475ZM24.5481 36.33C24.6181 35.8925 25.8601 35.805 25.6327 36.7675C25.4053 37.7475 25.1079 38.9025 24.8805 39.8825C24.7755 39.8825 24.6705 39.8825 24.5656 39.8825C24.4606 39.8825 24.3557 39.8825 24.2507 39.8825C24.0233 38.9025 23.7259 37.7475 23.4985 36.7675C23.2361 35.805 24.4781 35.8925 24.5481 36.33ZM22.8862 37.135C23.1661 37.8875 23.481 39.0775 23.7609 39.9175C23.5335 39.935 23.3061 39.9525 23.0961 39.9875C22.9737 39.69 22.5888 38.71 22.1865 37.7475C21.8016 36.855 22.6938 36.61 22.8862 37.135Z" />
    <path d="M38.1753 24.71H28.5714H18.9675H18.6177V25.0775V31.9375C18.7051 31.99 18.7926 32.06 18.8801 32.13V25.0075H38.3327V31.6225C38.4027 31.6925 38.4727 31.78 38.5427 31.9025V25.06V24.6925H38.1753V24.71Z" />
    <path d="M19.5975 31.2725C20.1048 31.6925 20.2972 31.99 20.1398 33.39C20.1223 33.565 20.2098 33.8975 20.3147 34.2475H37.4408C37.4583 34.055 37.4758 33.88 37.4758 33.7225C37.4933 32.9525 37.3533 32.34 37.1084 32.095C37.0209 32.0075 36.9335 31.9725 36.776 31.9725H36.741L36.0588 32.0425L36.4262 31.465C36.776 30.8875 37.3008 30.555 37.8431 30.52V25.4275H19.3526V31.115C19.4226 31.15 19.4751 31.185 19.545 31.2375L19.5975 31.2725ZM30.4784 30.6075V30.2575L29.6387 30.24C29.8311 29.3475 31.563 28.2275 32.3502 27.965C32.3152 27.0025 33.5747 26.6875 34.5893 26.6525C35.8489 26.6175 36.1463 27.9825 36.1463 28.4025C36.1463 28.9625 36.0063 30.205 35.3066 30.59C34.292 31.15 33.4173 30.38 33.4173 29.68C33.4173 28.91 33.9421 28.4725 34.8692 28.5775C35.7789 28.6825 35.7089 28.1575 35.0267 27.9825C34.6943 27.895 33.2424 27.825 32.7525 28.91C32.4726 28.9275 32.1753 28.805 32.0003 28.63C31.8079 28.875 31.5105 29.0325 31.1082 29.155C31.458 29.8725 32.1753 29.75 32.6126 29.4175C32.5951 29.5225 32.5951 29.61 32.5951 29.715C32.5951 31.4825 34.4669 31.92 35.6215 31.255C35.429 31.8325 35.5165 32.55 35.604 33.04H31.0557C31.1257 32.55 31.7379 31.99 32.2452 31.64L31.8429 31.01C31.3531 31.22 30.8807 31.43 30.3559 31.57C29.0964 31.8675 29.1664 30.9575 30.4784 30.6075ZM27.2771 32.0425C27.1022 32.2875 26.0176 32.62 25.7552 32.4625C25.3004 32.1825 25.0729 31.605 25.1779 31.3425C25.3004 31.01 26.4899 30.6775 26.8748 30.8C27.2596 30.9225 27.4171 31.815 27.2771 32.0425ZM20.962 29.225C21.9591 28.6475 22.4839 28.2275 23.0087 27.405C22.6239 27.2125 22.1515 26.8625 21.8017 26.3725C23.7085 26.915 24.6706 27.195 26.9272 26.39C26.5599 26.9675 26.0176 27.3175 25.5628 27.615C26.0701 28.455 26.5774 29.4175 26.7523 30.1875C26.0876 30.135 25.3178 30.2925 24.7756 30.8C23.9359 30.835 22.8688 31.0975 22.2915 29.19C21.9941 29.3475 21.6792 29.54 21.6792 29.54C22.0291 30.7825 22.6589 31.64 24.3382 31.4475C24.4257 31.85 24.4957 32.0775 24.7056 32.41C24.0233 32.8125 22.2915 33.8275 20.9795 32.655V29.225H20.962Z" />
    <path d="M19.3526 31.5175V34.265H19.9647C19.8598 33.8975 19.7723 33.5825 19.8073 33.3725C19.9472 31.9725 19.7374 31.8325 19.3526 31.5175Z" />
    <path d="M37.8254 34.265V30.8525C37.4232 30.8875 37.0209 31.1325 36.7061 31.64C36.7411 31.64 36.776 31.64 36.811 31.64C37.5631 31.64 37.8254 32.6725 37.8079 33.74C37.8079 33.915 37.7904 34.09 37.7904 34.265H37.8254Z" />
    <path d="M23.8483 29.5925C24.1632 29.75 24.5655 29.5575 24.9679 29.61C24.8804 29.435 24.793 29.3125 24.8454 29.05C24.9504 28.56 24.5481 28.4375 24.3731 28.4375C23.9008 28.4725 23.6559 28.56 23.1661 28.4375C23.481 28.77 23.411 29.365 23.8483 29.5925Z" />
    <path d="M312.559 38.57V30.1175C312.559 28.7875 312.454 28.455 312.104 28.035C311.825 27.7025 311.3 27.51 310.722 27.51C309.725 27.51 308.168 28.315 307.259 29.26V38.57H305.352V28.945C305.352 27.16 304.88 26.3025 304.88 26.3025L306.786 25.7775C306.786 25.7775 307.241 26.705 307.241 27.7375C308.553 26.425 309.848 25.8125 311.177 25.8125C312.524 25.8125 313.731 26.53 314.239 27.65C314.449 28.105 314.536 28.6125 314.536 29.1025V38.5875H312.559V38.57Z" />
    <path d="M267.829 38.57V30.1175C267.829 28.7875 267.724 28.455 267.374 28.035C267.094 27.7025 266.569 27.51 265.992 27.51C264.995 27.51 263.438 28.315 262.528 29.26V38.57H260.622V28.945C260.622 27.16 260.149 26.3025 260.149 26.3025L262.056 25.7775C262.056 25.7775 262.511 26.705 262.511 27.7375C263.823 26.425 265.117 25.8125 266.447 25.8125C267.811 25.8125 269.001 26.53 269.508 27.65C269.701 28.105 269.806 28.6125 269.806 29.1025V38.5875H267.829V38.57Z" />
    <path d="M234.766 38.71H232.842L228.346 26.1975L230.358 25.7775L233.262 34.3875C233.611 35.42 233.856 36.5225 233.856 36.5225H233.909C233.909 36.5225 234.119 35.5425 234.504 34.4225L237.373 26.11H239.454L234.766 38.71Z" />
    <path d="M287.281 38.57V29.3475C287.281 28.14 286.739 27.51 285.672 27.51C284.552 27.51 283.66 28.245 282.366 29.435V38.57H280.389V29.6975C280.389 28.945 280.319 28.4375 280.039 28.0875C279.742 27.7375 279.339 27.58 278.762 27.58C277.8 27.58 276.873 28.0525 275.578 29.2425V38.57H273.689V28.8925C273.689 27.09 273.234 26.2325 273.234 26.2325L275.141 25.7775C275.141 25.7775 275.596 26.7575 275.596 27.6325C276.418 26.705 277.957 25.76 279.234 25.76C280.459 25.76 281.683 26.5125 282.138 27.8425C283.345 26.565 284.867 25.76 286.144 25.76C287.999 25.76 289.276 27.16 289.276 29.155V38.5875H287.281V38.57Z" />
    <path d="M294.681 32.655V32.9525C294.681 34.125 294.838 35.035 295.258 35.6825C295.958 36.7675 297.113 37.205 298.372 37.205C299.579 37.205 300.559 36.82 301.434 36.0325L302.186 37.2925C301.084 38.29 299.579 38.85 297.97 38.85C294.506 38.85 292.424 36.3475 292.424 32.2C292.424 30.1 292.879 28.735 293.929 27.475C294.926 26.3025 296.168 25.7425 297.672 25.7425C299.019 25.7425 300.209 26.215 301.049 27.09C302.133 28.1925 302.483 29.365 302.483 32.3575V32.6375H294.681V32.655ZM299.824 28.385C299.404 27.7025 298.53 27.2825 297.567 27.2825C295.783 27.2825 294.786 28.5775 294.681 31.1675H300.401C300.366 29.82 300.191 28.9975 299.824 28.385Z" />
    <path d="M242.708 32.655V32.9525C242.708 34.125 242.866 35.035 243.286 35.6825C243.985 36.7675 245.14 37.205 246.399 37.205C247.606 37.205 248.586 36.82 249.461 36.0325L250.213 37.2925C249.111 38.29 247.606 38.85 245.997 38.85C242.533 38.85 240.452 36.3475 240.452 32.2C240.452 30.1 240.906 28.735 241.956 27.475C242.953 26.3025 244.195 25.7425 245.7 25.7425C247.047 25.7425 248.236 26.215 249.093 27.09C250.178 28.1925 250.528 29.365 250.528 32.3575V32.6375H242.708V32.655ZM247.851 28.385C247.431 27.7025 246.539 27.2825 245.595 27.2825C243.81 27.2825 242.813 28.5775 242.708 31.1675H248.429C248.394 29.82 248.219 28.9975 247.851 28.385Z" />
    <path d="M258.697 27.965C258.575 27.9125 258.347 27.86 258.155 27.86C257.403 27.86 256.65 28.1925 256.073 28.77C255.496 29.3475 255.338 29.715 255.338 30.7475V38.57H253.379V28.945C253.379 27.1075 252.959 26.285 252.959 26.285L254.919 25.76C254.919 25.76 255.391 26.74 255.321 27.79C256.231 26.5125 257.543 25.7075 258.837 25.7075C259.169 25.7075 259.519 25.83 259.519 25.83L258.697 27.965Z" />
    <path d="M222.223 38.9025C218.795 38.9025 216.835 36.365 216.835 32.2525C216.835 28.1925 218.865 25.7075 222.153 25.7075C224.235 25.7075 225.6 26.6525 226.439 27.895C227.209 29.0325 227.594 30.5025 227.594 32.5325C227.594 36.6975 225.355 38.9025 222.223 38.9025ZM224.777 28.91C224.253 27.8075 223.151 27.3 222.118 27.3C221.016 27.3 219.984 27.825 219.564 28.6475C219.162 29.4175 218.97 30.4325 218.97 31.9025C218.97 33.6525 219.267 35.21 219.757 35.9975C220.212 36.75 221.209 37.2575 222.293 37.2575C223.605 37.2575 224.585 36.575 225.005 35.3675C225.285 34.5975 225.39 33.8975 225.39 32.655C225.355 30.9225 225.18 29.75 224.777 28.91Z" />
    <path d="M164.81 39.235C164.04 38.9025 163.323 38.325 163.008 37.6775C162.763 37.9225 162.483 38.185 162.239 38.36C161.609 38.815 160.699 39.06 159.65 39.06C156.798 39.06 155.241 37.6075 155.241 35.0525C155.241 32.0425 157.323 30.6425 161.416 30.6425C161.661 30.6425 161.889 30.6425 162.169 30.66V30.135C162.169 28.7 161.889 28.2275 160.664 28.2275C159.58 28.2275 158.338 28.7525 156.956 29.68L155.521 27.265C156.203 26.845 156.693 26.5825 157.603 26.215C158.862 25.69 159.929 25.4625 161.119 25.4625C163.271 25.4625 164.758 26.2675 165.265 27.7025C165.44 28.2275 165.51 28.63 165.492 30.0125L165.422 34.335C165.405 35.735 165.492 36.3475 166.629 37.1875L164.81 39.235ZM161.941 32.9525C159.615 32.9525 158.81 33.3725 158.81 34.9125C158.81 35.91 159.44 36.5925 160.297 36.5925C160.927 36.5925 161.556 36.26 162.046 35.7175L162.099 32.9525H161.941Z" />
    <path d="M112.855 33.1975V33.3025C112.855 35.28 113.834 36.4175 115.566 36.4175C116.721 36.4175 117.805 35.9975 118.82 35.14L120.132 37.1525C118.645 38.36 117.105 38.9375 115.286 38.9375C111.595 38.9375 109.216 36.33 109.216 32.2875C109.216 29.9775 109.688 28.455 110.825 27.195C111.875 26.0225 113.152 25.4625 114.866 25.4625C116.353 25.4625 117.753 25.97 118.575 26.81C119.747 28.0175 120.289 29.75 120.289 32.4275V33.1975H112.855V33.1975ZM116.791 30.59C116.791 29.645 116.686 29.1375 116.388 28.665C116.056 28.1575 115.584 27.9125 114.901 27.9125C113.624 27.9125 112.89 28.91 112.89 30.695V30.7475H116.773V30.59H116.791Z" />
    <path d="M99.8745 33.1975V33.3025C99.8745 35.28 100.854 36.4175 102.586 36.4175C103.741 36.4175 104.825 35.9975 105.84 35.14L107.152 37.1525C105.665 38.36 104.108 38.9375 102.306 38.9375C98.615 38.9375 96.2359 36.33 96.2359 32.2875C96.2359 29.9775 96.7082 28.455 97.8453 27.195C98.8949 26.0225 100.172 25.4625 101.886 25.4625C103.373 25.4625 104.773 25.97 105.595 26.81C106.767 28.0175 107.309 29.75 107.309 32.4275V33.1975H99.8745V33.1975ZM103.811 30.59C103.811 29.645 103.706 29.1375 103.408 28.665C103.076 28.1575 102.603 27.9125 101.921 27.9125C100.644 27.9125 99.9095 28.91 99.9095 30.695V30.7475H103.793V30.59H103.811Z" />
    <path d="M176.058 38.57V30.2225C176.058 28.77 175.796 28.3325 174.921 28.3325C174.239 28.3325 173.364 28.7875 172.595 29.4875V38.57H169.236V29.26C169.236 28.1575 169.079 27.1075 168.781 26.25L171.773 25.3925C172.07 25.9175 172.245 26.4775 172.245 27.0025C172.752 26.6525 173.172 26.355 173.732 26.0575C174.414 25.7075 175.289 25.4975 176.041 25.4975C177.475 25.4975 178.717 26.25 179.12 27.3525C179.295 27.825 179.365 28.385 179.365 29.19V38.57H176.058V38.57Z" />
    <path d="M129.788 38.57V30.2225C129.788 28.77 129.543 28.3325 128.651 28.3325C127.969 28.3325 127.094 28.7875 126.324 29.4875V38.57H122.966V29.26C122.966 28.1575 122.808 27.1075 122.511 26.25L125.502 25.3925C125.8 25.9175 125.975 26.4775 125.975 27.0025C126.482 26.6525 126.902 26.355 127.461 26.0575C128.144 25.7075 129.018 25.4975 129.771 25.4975C131.205 25.4975 132.447 26.25 132.849 27.3525C133.024 27.825 133.094 28.385 133.094 29.19V38.57H129.788V38.57Z" />
    <path d="M91.5649 38.92C91.1451 38.6225 90.7952 38.2025 90.5678 37.66C89.7456 38.465 88.5386 38.885 87.1916 38.885C85.3897 38.885 83.8328 38.0275 83.3955 36.8025C83.2031 36.225 83.1156 35.5425 83.1156 34.2475V26.0225L86.4219 25.3925V33.6525C86.4219 34.8075 86.5268 35.4025 86.7017 35.7525C86.8767 36.1025 87.384 36.3475 87.8738 36.3475C88.696 36.3475 89.7106 35.7525 89.9555 35.1225V26.0925L93.1743 25.41V35.21C93.1743 36.0675 93.4542 36.9425 93.944 37.5375L91.5649 38.92Z" />
    <path d="M140.722 38.9725C139.147 38.9725 137.416 38.465 135.526 37.5025L136.733 35.0525C137.766 35.6825 139.55 36.505 141.002 36.505C141.946 36.505 142.699 35.875 142.699 35.0525C142.699 34.1775 142.069 33.7225 140.722 33.4775L139.217 33.1975C138.36 33.04 137.311 32.445 136.856 31.885C136.401 31.3425 136.121 30.3975 136.121 29.575C136.121 27.0725 138.098 25.375 141.089 25.375C143.153 25.375 144.5 26.005 145.673 26.5825L144.57 28.84C143.293 28.1925 142.366 27.9125 141.404 27.9125C140.425 27.9125 139.777 28.42 139.777 29.1725C139.777 29.82 140.197 30.17 141.387 30.4675L142.944 30.87C144.518 31.2725 145.043 31.745 145.498 32.3225C145.97 32.9175 146.197 33.6525 146.197 34.51C146.215 37.17 144.011 38.9725 140.722 38.9725Z" />
    <path d="M322.968 27.5625H320.361V35.6125C320.361 36.995 320.729 37.4675 321.971 37.4675C322.513 37.4675 322.845 37.3975 323.195 37.2225L323.475 38.4825C322.845 38.815 322.146 38.99 321.271 38.99C320.624 38.99 320.116 38.8675 319.644 38.64C318.769 38.22 318.437 37.415 318.437 36.155V27.58H316.81V26.075H318.437C318.437 24.8675 318.629 22.9075 318.629 22.9075L320.694 22.4525C320.694 22.4525 320.449 24.4125 320.449 26.0575H323.58L322.968 27.5625Z" />
    <path d="M209.243 38.85C207.092 38.85 205.255 38.0975 203.943 36.6975C202.491 35.1225 201.809 32.9875 201.809 30.03C201.809 26.74 202.683 24.4125 204.468 22.8025C205.692 21.7 207.179 21.175 208.964 21.175C210.8 21.175 212.375 21.7525 213.669 22.8725L212.742 24.15C211.343 23.205 210.328 22.82 208.998 22.82C206.987 22.82 205.412 23.7475 204.713 25.725C204.258 27.0025 204.03 28.455 204.03 30.1C204.03 32.3575 204.45 34.1775 205.237 35.315C206.025 36.4525 207.774 37.1525 209.401 37.1525C210.485 37.1525 211.413 36.925 212.13 36.47V31.22H208.666L208.264 29.5225H214.054V37.555C212.847 38.3425 210.993 38.85 209.243 38.85Z" />
    <path d="M81.0868 41.5275C81.0868 41.5275 80.5795 41.825 79.5299 41.825C78.1829 41.825 76.9759 41.02 76.3286 40.6C75.5064 40.0575 74.1419 39.27 72.795 38.85C70.1884 38.85 68.4741 38.1325 67.1446 36.4C65.8151 34.685 65.1328 32.48 65.1328 29.925C65.1328 26.1625 66.5673 23.135 69.0689 21.77C70.101 21.2275 71.378 20.9125 72.6725 20.9125C77.3082 20.9125 80.1772 24.3075 80.1772 29.7675C80.1772 33.5475 78.8302 36.3825 76.7485 37.765C77.2208 37.94 77.903 38.395 78.3054 38.64C78.9351 39.0075 79.6873 39.3575 80.4571 39.3575C81.2093 39.3575 82.014 39.235 82.014 39.235L81.0868 41.5275ZM75.6989 25.83C75.419 24.955 74.4918 23.625 72.6375 23.625C71.4655 23.625 70.4333 24.22 69.926 25.1475C69.3313 26.2675 69.0514 27.8075 69.0514 29.9075C69.0514 32.9175 69.5587 34.8075 70.6083 35.56C71.1681 35.9625 71.8678 36.155 72.69 36.155C75.1216 36.155 76.1537 34.3 76.1537 29.855C76.1537 28.0875 75.9962 26.81 75.6989 25.83Z" />
    <path d="M190.91 38.57C190.805 38.3775 190.753 38.1675 190.718 37.8175C189.895 38.5525 188.916 38.9025 187.761 38.9025C184.507 38.9025 182.443 36.365 182.443 32.375C182.443 28.3675 184.665 25.6025 187.936 25.6025C188.863 25.6025 189.598 25.83 190.21 26.3375C190.158 26.0575 190.105 25.1825 190.105 24.43V20.02L193.447 20.545V33.8975C193.447 37.065 193.691 38.08 193.919 38.5875H190.91V38.57ZM190.158 29.12C189.528 28.56 188.933 28.2975 188.321 28.2975C186.817 28.2975 186.169 29.5575 186.169 32.41C186.169 35.175 186.747 36.0675 188.496 36.0675C189.126 36.0675 189.825 35.63 190.158 35.245V29.12Z" />
    <path d="M152.18 38.8675C150.745 38.8675 149.591 38.185 149.188 37.1175C148.943 36.47 148.891 36.0675 148.891 34.23V24.64C148.891 22.96 148.838 21.9275 148.716 20.7725L152.145 19.985C152.267 20.685 152.32 21.5075 152.32 23.3275V33.3375C152.32 35.5425 152.337 35.84 152.547 36.19C152.67 36.4175 152.949 36.54 153.229 36.54C153.352 36.54 153.439 36.54 153.597 36.4875L154.174 38.5C153.597 38.745 152.897 38.8675 152.18 38.8675Z" />
    <path d="M31.213 20.615C31.0905 20.615 30.9681 20.6675 30.8981 20.7725C30.7582 20.755 30.6182 20.72 30.4608 20.7025V19.915C30.6007 19.8625 30.7057 19.7225 30.7057 19.5475C30.7057 19.3375 30.5308 19.145 30.3208 19.145C30.1109 19.145 29.936 19.32 29.936 19.5475C29.936 19.6875 30.0234 19.8275 30.1459 19.8975V20.65C30.0059 20.6325 29.8835 20.615 29.7261 20.615C29.6736 20.475 29.5336 20.3875 29.3762 20.3875C29.1663 20.3875 28.9913 20.5625 28.9913 20.7725C28.9913 20.9825 29.1663 21.1575 29.3762 21.1575C29.5161 21.1575 29.6386 21.0875 29.7086 20.9825C29.866 21 30.0059 21.0175 30.1459 21.035L30.1284 22.1725C30.0059 22.2425 29.9185 22.365 29.9185 22.5225C29.9185 22.7325 30.0934 22.925 30.3033 22.925C30.5133 22.925 30.7057 22.75 30.7057 22.5225C30.7057 22.365 30.6007 22.225 30.4783 22.1725L30.4958 21.07C30.6182 21.0875 30.7407 21.105 30.8631 21.1225C30.9156 21.28 31.0556 21.385 31.2305 21.385C31.4404 21.385 31.6153 21.21 31.6153 21C31.5978 20.79 31.4229 20.615 31.213 20.615Z" />
    <path d="M27.8018 20.3875C27.6444 20.3875 27.5044 20.475 27.4345 20.615C27.2945 20.6325 27.1546 20.6325 27.0146 20.65V19.8975C27.1371 19.8275 27.2245 19.705 27.2245 19.5475C27.2245 19.3375 27.0496 19.145 26.8397 19.145C26.6123 19.145 26.4373 19.32 26.4373 19.5475C26.4373 19.705 26.5423 19.845 26.6647 19.915L26.6822 20.7025C26.5423 20.72 26.3848 20.7375 26.2449 20.7725C26.1749 20.685 26.07 20.615 25.93 20.615C25.7201 20.615 25.5452 20.79 25.5452 21.0175C25.5452 21.2275 25.7201 21.4025 25.93 21.4025C26.105 21.4025 26.2449 21.2975 26.2974 21.14C26.4198 21.1225 26.5423 21.105 26.6647 21.0875L26.6822 22.19C26.5423 22.2425 26.4548 22.3825 26.4548 22.54C26.4548 22.75 26.6298 22.9425 26.8397 22.9425C27.0496 22.9425 27.242 22.7675 27.242 22.54C27.242 22.3825 27.1546 22.26 27.0321 22.19V21.0525C27.1721 21.035 27.312 21.0175 27.4694 21C27.5394 21.105 27.6619 21.175 27.8018 21.175C28.0117 21.175 28.2042 21 28.2042 20.79C28.2042 20.5625 28.0117 20.3875 27.8018 20.3875Z" />
    <path d="M41.0795 12.285C41.0795 9.83501 40.992 7.82252 40.957 7.19252C41.0445 7.21002 41.1494 7.24501 41.2544 7.28001C43.0037 7.89251 43.4061 10.01 47.0447 7.61251C45.1029 7.84001 44.998 6.19501 44.1058 6.16001C45.4528 5.39001 45.5403 3.64001 45.5403 3.64001C44.4207 4.55001 41.7967 4.60251 41.2894 4.90001C40.6071 5.30251 39.7675 5.81001 39.1902 6.12501C37.6857 6.94751 38.7353 11.4275 38.5779 13.055C37.7557 10.6225 36.1113 10.99 35.2542 9.59001C34.6069 10.7625 35.2891 12.705 35.5515 13.265C34.6069 14.035 34.8693 15.435 35.0967 15.82C35.9014 15.2425 37.1434 15.3825 37.5108 16.3625C36.4612 17.01 34.6944 17.115 33.4873 15.96L33.0675 16.4325C33.9247 17.5525 36.0414 17.99 37.6333 17.08C37.6333 17.3425 37.5633 17.6225 37.4583 17.9375C36.6361 18.375 35.569 18.6025 34.362 18.1825C34.5194 19.4075 35.9364 20.3175 37.2834 20.7025C36.8286 21.0525 36.2688 21.1925 35.8664 21.14C36.1288 21.8575 36.2688 22.8025 35.7265 23.555C35.0617 23.1175 34.6944 22.6625 34.4495 20.9475C34.1871 19.215 32.945 17.465 31.9829 17.115C31.9304 17.7275 31.9304 17.465 32.0354 17.85C34.5894 19.7225 33.155 23.1175 35.8139 24.3425C36.7936 23.2225 36.8111 22.8375 36.6536 21.7875C37.6158 21.525 38.333 20.72 38.5954 20.09C37.6857 20.5275 36.2338 19.7575 35.8314 19.1625C37.4233 19.11 38.8928 17.92 40.3972 16.345C41.7442 14.945 43.5285 15.155 43.3886 16.2575C44.3157 16.1175 44.6831 14.8575 44.3857 14.035C45.7502 13.5975 46.8173 12.6 46.9572 11.025C45.1204 11.935 42.8113 10.43 41.0795 12.285ZM43.2661 13.5975C43.9834 14.1925 43.756 15.0325 43.581 15.225C42.9513 14.14 40.922 14.5075 38.9278 16.765C38.7878 16.94 38.5954 17.1325 38.3855 17.325C38.5429 14.63 36.3388 14.5775 35.6915 14.8575C35.7615 14.0875 36.2513 13.545 36.4962 13.475C35.8489 12.7225 35.709 11.7775 35.639 11.0775C36.7236 11.55 38.3155 12.81 38.5779 14.98L39.2776 14.5075C39.0677 10.71 39.1202 10.7275 39.0852 8.15501C39.0852 7.78751 39.1027 6.94751 40.2398 7.03501C40.2923 7.99751 40.4322 10.535 40.3797 14.07H40.7821C41.1494 13.09 42.4614 11.9175 43.9834 12.0225C45.0155 12.0925 45.3828 12.075 45.9776 11.8125C45.5053 13.0025 43.7385 13.5275 43.2661 13.5975ZM40.2923 6.37001C41.027 5.84501 41.4993 5.60001 41.8842 5.37251C42.5139 5.39001 43.616 5.32001 44.2633 4.98751C43.581 5.82751 43.511 6.12501 42.3915 6.24751C43.8434 6.37001 44.4557 7.66501 45.1554 7.87501C42.7413 8.62751 42.4964 6.23001 40.2923 6.37001Z" />
    <path d="M25.0903 18.305C23.7433 18.375 22.4313 20.125 22.9736 22.12C22.7637 22.19 22.1864 22.19 21.994 21.7875C21.854 22.435 20.5245 23.1875 19.5624 23.0825C20.0872 22.505 20.4545 21.21 21.4867 20.5275C22.5363 19.845 22.9911 19.3725 23.3585 18.2C22.8686 18.4275 20.3671 19.075 19.6499 18.305C21.3117 18.06 23.2535 17.1325 24.2156 16.52L23.8308 16.1175C22.7987 16.7125 21.4167 17.185 20.7169 17.4125C20.472 15.3475 22.4313 15.435 22.5887 15.995C23.3934 15.0325 22.8337 13.65 22.2389 13.4925C22.8511 11.8475 22.2389 10.8325 21.7141 10.22C21.5916 11.97 19.6324 12.25 19.4049 13.5975C19.335 12.53 19.265 9.64252 19.1775 8.24252C19.0551 5.61752 15.7488 4.69002 15.2415 4.69002C13.0898 4.79502 12.8974 4.51502 12.9499 3.51752C11.8478 4.76002 12.2152 5.86252 13.1423 6.40502C13.0199 7.15752 11.8303 7.73502 11.0956 7.89252C12.8449 9.52002 14.8742 8.55752 15.8538 7.63002C15.9238 7.56002 15.9762 7.50752 16.0462 7.43752C16.3961 8.05002 16.6585 9.18752 16.6585 9.83502C15.0141 9.74752 14.7342 11.0075 14.7342 11.48C16.8159 10.6225 17.0433 14.6125 17.5856 15.2425C17.0608 15.2075 16.1162 13.965 14.7342 13.8775C13.0548 13.79 12.4776 14.6825 11.7953 14.6475C11.9178 15.82 13.3522 16.485 14.2794 16.625C13.8071 17.8325 14.2269 18.655 15.2065 18.9525C15.2065 17.85 16.606 17.5 18.0929 18.375C19.8948 19.425 20.8044 19.5125 22.2564 19.075C22.0115 19.6 21.3642 19.6525 20.577 20.44C19.4574 21.5425 19.4224 22.9775 18.1804 23.5025C19.6499 24.2025 21.854 23.2225 22.1689 22.6625C22.7812 23.0475 23.5684 22.82 23.7783 22.435C22.7812 20.23 24.4605 18.935 25.1253 18.9525C25.1253 18.935 25.4227 18.2875 25.0903 18.305ZM17.4807 17.4125C16.7459 17.115 15.6089 16.9225 14.9791 17.815C14.6292 17.2025 15.1366 16.31 15.4514 16.03C13.842 16.065 12.9324 15.575 12.6875 15.085C13.2823 14.7525 14.7867 14.21 16.0287 15.12C16.8859 15.75 17.3057 16.0475 18.3204 16.38C18.6877 16.0125 18.5478 16.1875 18.6702 16.0825C17.848 15.505 17.4807 11.1125 15.8538 10.955C16.0812 10.395 16.9209 10.4475 17.6031 10.6225C17.6556 9.64252 17.2533 8.01502 16.641 7.07002C17.5856 6.58002 18.2329 7.10502 18.5478 8.27752C18.8976 9.52002 18.4778 12.6175 19.3 15.4175L19.8073 14.945C19.5449 13.3175 21.3467 12.7225 21.7316 11.9C21.889 12.985 21.6616 13.4925 21.3467 13.8775C21.994 13.9475 22.2914 14.595 22.1864 15.0325C20.6295 14.805 19.7198 16.3625 20.0697 17.605C18.8976 17.8675 18.1104 17.675 17.4807 17.4125ZM13.0548 5.18002C14.2794 5.77502 14.6817 4.67252 16.9734 6.16002C15.4514 6.63252 14.2794 8.52252 12.565 8.03252C13.7896 7.42002 13.6671 6.52752 14.3843 6.07252C13.9295 6.02002 13.0373 5.81002 13.0548 5.18002Z" />
    <path d="M33.0149 23.765C32.7699 22.19 32.2102 17.745 32.1402 16.275L31.4579 16.31C31.4579 16.555 31.4929 16.8875 31.5279 17.29C30.7232 17.045 29.6561 16.8875 28.5715 16.8875C27.4869 16.8875 26.4198 17.0625 25.6152 17.29C25.6501 16.905 25.6851 16.5725 25.6851 16.31L25.0204 16.2575C24.9504 17.745 24.3906 22.1725 24.1457 23.7475C23.7434 23.905 23.481 24.3075 23.481 25.025C23.481 25.025 27.1546 25.0775 28.589 25.0775C30.0235 25.0775 33.6971 25.025 33.6971 25.025C33.6796 24.3075 33.4172 23.9225 33.0149 23.765ZM28.5715 23.7125C27.9943 24.8325 26.9097 24.7975 25.9475 24.1675C25.5627 23.9225 25.1778 23.7475 24.8105 23.695C24.9679 22.5925 25.2478 20.5275 25.4402 18.7775C26.6648 18.2175 28.1867 18.095 28.554 19.5125C28.9214 18.095 30.4433 18.235 31.6679 18.7775C31.8603 20.5275 32.1402 22.61 32.2976 23.695C31.9478 23.7475 31.5454 23.9225 31.1606 24.1675C30.2509 24.7975 29.1663 24.8325 28.5715 23.7125Z" />
    <path d="M36.1988 6.51C36.2163 6.16 35.569 5.8975 35.3941 5.88C35.1142 5.8625 34.7818 6.44 34.4145 6.79C34.0996 5.11 34.257 4.375 34.432 3.6225C35.1492 4.9175 36.1113 5.1975 36.6186 5.1275C34.9043 3.7625 35.2017 2.52 34.6769 2.45C34.3795 2.415 34.1696 2.4325 34.0121 2.4325C33.4173 2.4325 33.3299 3.605 33.2424 4.13C32.8576 3.4125 32.4727 2.8 31.808 1.96C31.1782 0.3325 30.4085 0.735 29.6213 0C30.2335 0.9275 29.7437 1.505 31.1607 2.17C31.5281 2.52 31.9654 3.08 32.2453 3.5175C32.0004 3.8325 31.8429 4.0075 31.6155 4.235C31.4406 4.4975 31.3531 5.5125 30.8108 6.265C31.6155 5.915 31.9479 5.4075 32.2278 4.935C34.7993 6.8775 32.7176 11.8125 32.1228 12.8975C31.563 12.5125 30.8283 12.3025 30.1811 12.18L30.1111 11.9525L29.5163 10.01H29.7962C30.1111 10.01 30.1986 9.8 30.1461 9.625L31.9129 10.1675L32.7001 10.4125L32.2278 9.7475L31.4056 8.61L32.2278 7.4725L32.7001 6.8075L31.9129 7.0525L30.321 7.5425C30.2161 7.175 29.9187 7 29.5863 6.965L30.1286 5.1625L30.356 4.3925L29.7087 4.865L28.5717 5.6875L27.4346 4.865L26.7873 4.3925L27.0148 5.1625L27.5571 6.965C27.2422 7.0175 26.9273 7.1925 26.8223 7.5425L25.2304 7.0525L24.4432 6.8075L24.9156 7.4725L25.7377 8.61L24.9156 9.7475L24.4432 10.4125L25.2304 10.1675L27.0148 9.625C26.9623 9.8 27.0323 10.01 27.3471 10.01H27.627L27.0323 11.9525L26.9448 12.1975C26.2625 12.32 25.5278 12.5475 24.968 12.9325C23.2362 9.59 23.726 6.195 25.178 5.075C25.1605 5.7925 25.7727 6.755 26.0701 6.9475C25.8777 6.2125 26.2101 4.9 25.8252 4.5675C25.5628 4.34 25.1605 4.235 24.7231 4.235C25.0205 3.745 25.4229 3.1325 26.1051 2.24C27.1197 1.785 27.4171 0.595 27.662 0C26.5599 0.4025 25.7377 0.98 25.5628 1.9075C25.178 2.4325 24.7406 3.045 24.2508 3.7625C24.2858 2.8875 23.796 2.59 23.1662 2.5375C21.3119 2.9225 21.4344 4.27 19.8425 5.1975C20.9271 5.5825 22.6414 3.185 23.2362 3.4475C23.3237 4.9175 22.9913 6.0725 22.9913 6.8775C22.7114 6.5625 22.5714 6.3525 22.3265 6.3175C22.0991 6.2825 21.4694 6.335 21.0495 6.8075C20.9271 7.56 20.962 8.96 20.2623 10.6225C21.2944 9.6775 21.8017 7.805 21.9592 7.2625C22.2216 7.63 22.519 8.435 22.5889 9.135C22.7114 10.465 23.5336 12.705 24.2333 13.7725C24.0409 14.14 23.9884 14.56 24.0584 15.0325C23.5161 15.435 23.4461 15.995 23.6385 16.38C23.8485 16.7825 24.3733 17.0625 25.003 16.8175L25.1954 16.73C25.8602 16.45 27.0847 15.9425 28.5717 15.9425C30.0586 15.9425 31.3006 16.45 31.9479 16.73L32.1403 16.8175C32.7701 17.0625 33.2949 16.7825 33.5048 16.38C33.6972 15.995 33.6273 15.435 33.085 15.0325C33.1549 14.5425 33.085 14.0875 32.8576 13.685L32.875 13.7025C34.1521 11.8825 34.2395 8.4175 35.2891 7.4375C35.3766 8.645 36.0239 9.66 36.6536 9.8C36.1638 8.9425 36.1638 7.28 36.1988 6.51ZM30.3735 8.1375L31.3181 7.84L30.8633 8.47L30.7409 8.6275L30.8633 8.785L31.3181 9.415L30.1286 9.0475C30.216 8.8025 30.3035 8.54 30.3735 8.1375ZM25.8602 9.4325L26.315 8.8025L26.4375 8.645L26.315 8.4875L25.8602 7.8575L26.8048 8.155C26.8573 8.5575 26.9448 8.8375 27.0497 9.0825L25.8602 9.4325ZM29.5863 9.1175H28.8516L28.939 7.805C30.0411 7.2975 29.9536 8.33 29.5863 9.1175ZM29.3764 11.3575L28.7466 10.9025L28.5892 10.78L28.4317 10.9025L27.802 11.3575L28.2043 10.0275H28.974L29.3764 11.3575ZM28.4142 6.265L28.5717 6.3875L28.7291 6.265L29.3764 5.7925L29.009 7.035C28.9915 7.035 28.974 7.035 28.974 7.0525C28.904 6.895 28.7466 6.79 28.5717 6.79C28.3967 6.79 28.2393 6.895 28.1693 7.0525C28.1518 7.0525 28.1518 7.0525 28.1343 7.035L27.767 5.7925L28.4142 6.265ZM27.5745 9.1175C27.2072 8.33 27.1197 7.2975 28.2218 7.805L28.3093 9.1175H27.5745ZM28.5717 11.4625L29.4638 12.11C29.079 12.075 28.7641 12.075 28.5717 12.075C28.3792 12.075 28.0644 12.075 27.6795 12.11L28.5717 11.4625ZM24.933 16.0825L24.7406 16.1525C24.4782 16.2575 24.3033 16.17 24.2333 16.0475C24.1633 15.9075 24.2158 15.68 24.5307 15.4875C24.5657 15.47 24.6182 15.435 24.6706 15.4175L25.3004 15.925C25.1605 15.995 25.038 16.0475 24.933 16.0825ZM27.0672 15.4L26.42 14.77C26.9623 14.63 27.5221 14.5425 28.0644 14.5075L28.4492 15.26C27.9594 15.26 27.4871 15.33 27.0672 15.4ZM30.6709 15.54L30.286 14.665C30.8633 14.77 31.4231 14.945 31.9129 15.155L32.1403 16.065C31.773 15.9075 31.2831 15.6975 30.6709 15.54ZM28.5717 13.8075C27.3471 13.8075 25.9477 14.105 24.8806 14.56C24.8981 14.315 24.9855 14.1225 25.1255 13.93C25.7377 13.1775 27.3646 12.915 28.5542 12.915C29.7437 12.915 31.3706 13.1775 31.9829 13.93C32.1403 14.105 32.2103 14.315 32.2278 14.56C31.1957 14.0875 29.8312 13.8075 28.5717 13.8075Z" />
    <path d="M19.8248 33.32C19.9823 31.9025 19.7549 31.78 19.3525 31.4475C19.0026 31.15 18.4079 31.0625 17.8306 30.66C17.4107 30.3625 17.2883 29.96 16.7635 29.4C16.8684 28.21 17.7256 26.74 18.3554 26.4075C18.4429 26.355 18.4254 24.5 18.4254 24.5C18.4254 24.5 18.8452 24.4825 18.8102 24.465C18.2504 24.115 17.5682 24.3775 17.0784 24.955C16.606 25.34 15.504 26.075 14.7517 26.3375C13.7371 25.48 12.1452 24.71 10.9732 23.555C10.9732 23.555 12.5126 23.5375 13.2298 23.2575C13.4222 23.135 13.9121 22.365 13.7021 21.6125C13.4572 21.525 13.1249 21.35 12.775 21.1575C12.3551 20.9125 11.9528 20.6675 11.7604 20.51C11.0956 20.0025 10.8157 19.565 9.66117 19.2675C9.73114 18.7425 9.85359 18.865 10.3609 18.515C11.0082 18.0775 11.3755 17.5525 11.6379 17.0275C11.8303 16.625 11.6029 15.785 11.0956 16.8525C10.9207 17.22 10.4134 17.7275 9.8361 17.885C9.88858 17.5525 9.90607 17.36 9.90607 17.185C11.6029 15.995 11.428 14.945 11.3055 13.9475C11.2006 13.37 10.6408 13.125 10.6583 13.72C10.6758 14.1225 11.0257 15.2425 9.87109 15.89C9.8361 15.4 9.71365 15.1725 9.60869 14.9275C10.6408 13.5625 10.2035 12.25 9.76613 11.655C9.48623 11.27 8.82148 11.1475 9.11887 11.7425C9.38127 12.2325 9.78362 13.58 9.01391 14.1225C8.75151 13.8075 8.45412 13.6675 8.34916 13.23C8.41913 11.76 8.33167 10.85 8.13924 10.325C7.96431 9.83503 7.49199 9.52003 7.52697 10.255C7.56196 11.0775 7.63193 12.11 7.56196 12.1625C7.49199 12.2325 6.40739 11.2175 5.97006 10.92C5.51523 10.605 4.99043 10.7275 5.49774 11.34C5.97006 11.865 7.35204 12.8975 7.1771 13.23C7.07214 13.44 6.07502 12.6175 5.55022 12.4425C5.02542 12.2675 4.86797 12.5475 5.30531 12.8975C6.02254 13.475 6.49486 13.86 7.66692 14.2625C8.83898 14.6475 9.41626 16.275 9.0489 18.585C9.0314 18.69 8.83898 18.6725 8.71652 18.6375C8.66404 17.7625 8.5066 16.695 8.29668 16.24C8.01679 15.61 7.47449 15.61 7.66692 16.4325C7.82436 17.08 7.91183 17.7975 7.80687 18.6725C6.84473 18.515 6.47737 18.2525 6.07502 18.0075C6.04003 17.5525 6.26745 16.8175 6.30243 16.17C6.33742 15.5225 5.95257 15.12 5.74264 15.925C5.53272 16.7125 5.39278 17.08 5.27032 17.64C4.99043 17.5525 4.69304 17.43 4.57059 17.2725C4.50061 17.2025 4.57059 16.3275 4.50061 15.68C4.43064 14.9625 4.15075 14.98 3.94083 15.61C3.83586 15.9075 3.76589 16.2925 3.7309 16.7475C3.39853 16.555 3.17112 16.17 3.13613 15.8375C3.18861 15.085 3.31106 14.2975 3.39853 13.79C3.4685 13.44 3.2236 12.705 2.9437 13.58C2.73378 14.2275 2.6813 14.7525 2.55885 15.19C2.31394 15.1725 1.99906 13.755 1.82412 12.8275C1.75415 12.425 1.40428 11.9525 1.33431 12.8625C1.26434 13.895 1.47426 14.9275 1.73666 15.3825C1.24684 15.33 0.774521 14.4375 0.424653 13.9125C0.127265 13.4575 -0.0301757 13.93 0.00481111 14.1225C0.302199 15.9425 1.75415 16.59 2.40141 16.7125C3.41602 18.165 5.35779 18.795 7.00217 19.5125C4.86798 19.495 4.30819 20.3525 3.32856 19.7925C3.36354 20.5975 3.76589 20.965 4.15075 21.1575C4.43064 21.28 4.69304 21.315 4.81549 21.35C4.99043 22.33 5.91758 22.2775 6.70478 22.33C6.49486 24.2375 6.73977 26.7575 8.40164 28.63C8.34916 29.5925 8.27919 30.87 8.29668 31.71C6.94969 32.9525 5.72515 35.6125 5.25283 37.0825C4.88547 38.185 4.34317 39.0425 3.50349 39.445C4.18573 40.1625 5.20035 39.8125 5.79512 39.41C5.83011 40.0575 5.98755 40.5125 6.09251 40.8975C5.70766 41.475 5.42776 41.8775 5.46275 42.595C5.02542 42.7175 4.71053 42.9975 4.48312 43.295C4.32568 43.4875 4.50061 44.3625 4.67555 44.73C5.21784 45.955 4.798 48.72 4.69304 49.525C4.92046 49.5425 5.3403 49.5425 5.42776 49.21C5.56771 49.3325 5.90009 49.5775 6.05753 50.1025C6.02254 50.33 5.88259 51.1875 6.31993 51.2925C6.66979 51.38 8.20921 51.3275 8.41913 51.065C8.26169 50.89 7.99929 50.47 7.84185 50.0675C7.84185 49.6475 7.80687 49.14 7.68441 48.93C7.50948 48.615 7.07214 47.915 6.77475 47.635C6.72227 47.1275 6.66979 44.87 6.89721 44.0125C7.29956 43.7325 9.99354 41.7375 10.5533 39.8125C11.0431 39.9875 10.9032 41.3175 10.9032 43.05C10.9032 43.5225 11.463 43.75 11.8129 43.8025C12.5476 43.89 13.5797 44.59 14.7517 46.3225C14.9792 46.0775 15.2765 45.85 15.2765 45.85C15.434 46.06 15.6089 46.55 15.7139 46.865C15.8363 47.11 16.781 47.25 17.4982 47.0225C17.7431 46.935 17.8831 46.9 18.0405 46.6375C17.1308 45.045 16.5711 43.9775 15.399 43.1025C14.8567 42.7 14.122 42.49 13.5097 42.105C13.9121 41.335 15.0316 37.765 14.3669 36.4525C14.1395 36.015 13.2823 35.595 12.2502 35.7875C13.1074 34.755 14.8742 32.69 15.1016 32.06C15.3115 32.305 16.3436 32.13 17.1134 32.445C17.3932 32.5675 18.1804 33.5825 18.2154 33.9325C18.2854 34.5625 18.3204 35.315 17.8831 37.0475C18.1979 36.995 18.1455 36.9775 18.4429 36.855C18.4953 37.31 18.3554 37.6775 17.953 38.3775C18.058 39.0075 18.3379 39.97 18.6353 40.145C19.0201 38.9725 20.4721 37.3275 20.4371 36.3475C20.3671 35.0175 19.7549 33.8975 19.8248 33.32Z" />
</svg>`;var z=`{{!prettier-ignore}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 56" {{#if fill}}fill="{{fill}}"{{/if}} {{#if className}}class="{{className}}"{{/if}} {{#if width}}width="{{width}}"{{/if}}
    {{#if height}}height="{{height}}"{{/if}}>
    <title>Queensland Government</title>
    <path d="M59.7908 21.2601C59.5958 21.3115 59.1235 21.4554 58.8154 21.4965C59.4007 20.9209 59.7498 20.2219 59.7498 19.6463C59.4726 19.7388 58.9695 19.9238 58.5074 20.0266C59.4212 19.2454 59.9141 18.3511 59.6984 17.1588C59.4212 17.3027 59.0208 17.5288 58.6306 17.6933C59.4315 16.4701 59.4212 15.3805 59.0927 14.7432C58.7333 15.0824 58.3021 15.473 57.8503 15.7505C58.1481 14.332 58.1275 13.4172 57.532 12.7696C56.9263 13.9209 56.4026 14.7637 55.5504 15.7814C55.6223 14.846 55.5196 13.6742 54.9036 13.0574C54.9036 13.0574 54.729 14.3629 54.267 14.7843C54.1541 13.4994 53.7639 12.8005 53.1787 12.1118C53.1787 12.1118 53.1376 13.448 52.7783 14.2704C52.4702 13.1499 51.8953 12.2865 51.1663 11.4642C51.2176 13.9311 50.5297 18.5773 48.5584 21.7021C48.3222 23.5523 48.1169 26.3482 45.1086 27.9928C44.6773 27.6844 43.9073 27.2938 42.8395 27.3555C42.552 25.9576 44.3796 24.683 45.9607 23.6756C47.5522 22.6477 48.2504 21.774 48.2093 20.3966C48.1682 18.8959 47.1518 18.2792 46.1045 18.238C44.626 18.1661 43.4144 19.5126 43.127 20.078C42.6957 20.2836 41.4329 20.6742 40.9092 20.8181C40.3342 20.9723 39.6771 21.2087 39.2664 21.5479C39.5129 21.7021 40.2008 21.7535 40.478 21.7123C40.9811 21.6404 42.5828 21.3423 44.1126 21.1573C44.6773 21.4554 45.5706 21.9693 44.6157 22.6272C43.3118 23.4598 42.7471 23.6756 40.9092 24.6419C38.0036 26.1631 38.9482 29.9972 39.6566 30.285C39.6566 31.5802 40.8168 33.9135 41.5971 34.7255C41.9462 36.3496 41.4842 38.7755 40.9914 39.7828C40.5909 38.796 39.8825 36.5141 39.4307 35.1778C39.903 32.6492 39.1432 31.5391 38.6093 31.1176C38.0754 30.6756 37.2335 30.799 36.6893 31.6727C37.5313 31.5802 37.8085 32.6595 37.7879 33.7696C37.7674 35.1059 37.4286 36.1749 36.4943 36.1852C36.5661 37.3261 37.7982 37.6551 38.4143 37.1C38.5067 37.357 38.9995 38.8577 39.4718 40.194C39.749 40.9855 40.016 41.7153 40.2008 42.0956C40.3959 42.517 41.8127 42.589 41.977 42.0956C42.2029 41.448 42.3774 40.9546 42.7368 40.194C43.0038 39.6184 43.3836 38.8783 43.9483 37.7887C44.3282 38.4465 44.8416 39.4847 45.1291 40.194C45.2626 40.5126 45.3652 40.7799 45.3755 40.9032C45.4884 41.9928 45.4268 45.8577 45.1291 48.1705C41.9565 47.307 41.0632 48.8592 41.3404 50.0104C41.8025 49.5067 42.3877 49.5684 42.7573 49.8357C42.6649 50.6785 42.9011 51.2953 43.7635 51.5523C44.6773 49.1367 47.9423 49.6712 48.2504 49.8768C48.2606 49.4142 48.7021 48.2527 47.0183 48.006C47.0799 45.9194 47.2955 43.3599 47.3776 42.8254C47.4495 42.2909 47.5111 41.962 47.2544 41.1294C47.1826 40.8827 47.0902 40.5743 46.9977 40.2043C46.7821 39.3614 46.5563 38.2615 46.5357 37.0589C46.8232 37.3467 47.5214 37.5831 48.0039 37.47C48.3736 39.053 48.9075 38.5905 49.1847 39.2483C49.3284 39.5875 49.3592 39.9062 49.4003 40.194C49.4311 40.4715 49.4722 40.7079 49.6262 40.9135C50.7556 40.9443 51.7105 40.6771 52.3984 40.194C52.614 40.0398 52.7885 39.8753 52.9528 39.6903C52.6756 38.0148 52.2033 37.1822 51.3306 36.1646C51.1047 34.7872 50.4578 33.5332 49.5851 32.4231C50.694 32.0633 51.8131 31.1587 52.4086 30.542C52.9425 30.5009 53.5483 30.0589 53.5894 29.1955C53.8974 29.1543 54.1643 29.1441 54.4005 29.0927C54.3697 28.8562 54.3081 28.4965 54.2773 28.2806C54.688 28.2806 55.0679 28.2601 55.458 28.2292C55.3451 27.9106 55.2014 27.5816 55.0884 27.3452C55.4991 27.3452 56.0022 27.3144 56.4129 27.2938C56.1973 26.8827 56.033 26.5332 55.9098 26.1734C56.3821 26.1323 57.1008 26.009 57.6963 25.8753C57.5012 25.6698 57.2856 25.4642 56.9673 25.1455C58.5177 24.683 59.1851 23.614 59.2672 23.1411C59.0413 23.1411 58.569 23.2439 58.2918 23.2234C59.1235 22.7094 59.7087 22.0104 59.7908 21.2601Z" />
    <path d="M38.1576 24.7343H28.568H18.968H18.6086V25.0941V31.9605C18.701 32.0119 18.7832 32.0838 18.8756 32.1661V25.0427H38.3219V31.6624C38.3938 31.7343 38.4554 31.8268 38.517 31.9502V25.1044V24.7446H38.1576V24.7343Z" />
    <path d="M28.5387 49.6403C19.9141 46.4229 18.8155 39.3407 18.7847 36.1337C18.7744 36.1337 18.7642 36.1337 18.7539 36.1234C18.7642 36.0412 18.7744 35.9692 18.7847 35.887C18.7847 35.188 18.836 34.7152 18.8668 34.5507C18.8463 34.0881 18.7744 33.7387 18.7026 33.4611C18.682 33.4097 18.641 33.3481 18.6204 33.2967V36.6271C18.6204 40.3583 19.9962 43.5757 22.6863 46.1865C25.0478 48.4787 27.6967 49.5478 28.4565 49.815L28.5797 49.8561L28.7029 49.815C29.4627 49.5478 32.1117 48.4787 34.4732 46.1865C37.1632 43.5757 38.5288 40.3481 38.5288 36.6271V36.0206C38.4672 36.1337 38.3953 36.1953 38.3132 36.2878C38.2413 37.9633 37.9333 40.5639 36.8141 42.5169C35.4794 45.2717 33.4362 47.5228 28.5387 49.6403Z" />
    <path d="M25.0863 18.3408C23.7413 18.423 22.4168 20.1705 22.9815 22.1646C22.7864 22.2365 22.2012 22.2262 22.0061 21.8254C21.8624 22.4729 20.5482 23.2233 19.583 23.1205C20.1169 22.5449 20.466 21.2497 21.5133 20.5611C22.5606 19.8724 23.0329 19.4098 23.3922 18.238C22.9097 18.4641 20.3942 19.1117 19.6857 18.3305C21.3387 18.0941 23.2895 17.1587 24.2547 16.5522L23.8645 16.1514C22.8275 16.7373 21.4414 17.2204 20.7432 17.4362C20.4968 15.3702 22.4682 15.4524 22.6119 16.0075C23.423 15.0412 22.8583 13.6536 22.2525 13.4994C22.8686 11.8547 22.2525 10.8371 21.7289 10.2204C21.6057 11.9781 19.6549 12.2556 19.4188 13.6022C19.3366 12.5332 19.275 9.64476 19.1826 8.23654C19.0286 5.6154 15.7328 4.71085 15.2297 4.71085C13.0735 4.81364 12.8682 4.52583 12.9195 3.52876C11.8312 4.77252 12.2008 5.88265 13.1249 6.41716C13.0017 7.16753 11.8004 7.74315 11.0714 7.90761C12.8271 9.53169 14.8601 8.56547 15.8252 7.64036C15.8971 7.57869 15.9689 7.51701 16.0408 7.45534C16.3899 8.07208 16.6466 9.20277 16.6466 9.85034C15.0038 9.75783 14.7163 11.0324 14.7163 11.4847C16.8006 10.6213 17.0265 14.6095 17.5706 15.2571C17.0367 15.2263 16.1024 13.9928 14.7163 13.9003C13.053 13.7975 12.4678 14.6815 11.7901 14.6506C11.9133 15.8224 13.3508 16.4906 14.2748 16.6345C13.8025 17.8371 14.2235 18.6594 15.1989 18.9575C15.1989 17.8577 16.5952 17.5082 18.0943 18.3922C19.8911 19.4406 20.8151 19.5332 22.2525 19.0912C22.0164 19.6154 21.3593 19.6668 20.5687 20.448C19.4496 21.5478 19.4188 22.9869 18.1661 23.5111C19.6344 24.2101 21.8316 23.2336 22.1499 22.6682C22.7659 23.0486 23.5565 22.8224 23.7618 22.4318C22.7762 20.2321 24.4395 18.9267 25.0966 18.9575C25.1171 18.9781 25.4046 18.3202 25.0863 18.3408ZM17.468 17.4362C16.7287 17.1381 15.5993 16.9428 14.9627 17.8371C14.6136 17.2409 15.127 16.3364 15.4453 16.0691C13.8333 16.0897 12.9195 15.6066 12.6834 15.1132C13.2789 14.7843 14.7882 14.2395 16.0203 15.144C16.8725 15.7608 17.3037 16.0691 18.3099 16.3981C18.6692 16.028 18.5358 16.1925 18.659 16.0897C17.8376 15.5243 17.468 11.1249 15.8457 10.9605C16.0819 10.4054 16.9135 10.4568 17.5809 10.6315C17.6322 9.64476 17.2215 8.02068 16.6158 7.08529C17.5501 6.5919 18.1969 7.12641 18.5255 8.29822C18.8746 9.54197 18.4639 12.6462 19.275 15.4421L19.7781 14.9693C19.5214 13.3349 21.3079 12.7387 21.6981 11.9267C21.8521 13.0266 21.6262 13.5097 21.3182 13.9105C21.9651 13.9928 22.2525 14.6198 22.1499 15.0721C20.5892 14.8357 19.6857 16.4083 20.0348 17.6521C18.8951 17.8988 18.1045 17.7035 17.468 17.4362ZM13.053 5.20424C14.2851 5.8107 14.6752 4.70057 16.9751 6.19102C15.4556 6.67413 14.2851 8.55519 12.5704 8.07208C13.8025 7.45534 13.669 6.56107 14.3878 6.10879C13.9257 6.04712 13.0427 5.84154 13.053 5.20424Z" />
    <path d="M41.0627 12.307C41.0627 9.86064 40.9703 7.84596 40.9395 7.20866C41.0319 7.22922 41.1243 7.26006 41.2373 7.30117C42.993 7.91791 43.3934 10.0354 47.0178 7.6301C45.0773 7.85624 44.9746 6.2116 44.0916 6.17048C45.4366 5.40984 45.529 3.65213 45.529 3.65213C44.3996 4.55668 41.7917 4.61836 41.2783 4.91645C40.6007 5.32761 39.7485 5.821 39.1735 6.13965C37.6642 6.96197 38.7115 11.4436 38.5678 13.078C37.7566 10.6418 36.1036 11.0016 35.2411 9.60367C34.5943 10.7652 35.2822 12.7285 35.5492 13.2835C34.6148 14.0442 34.8612 15.4627 35.0871 15.8327C35.888 15.2571 37.1303 15.401 37.5 16.3672C36.4527 17.0148 34.6867 17.1279 33.4854 15.9561L33.0542 16.4392C33.9064 17.5699 36.0317 18.0016 37.6129 17.0868C37.6026 17.3437 37.5513 17.6316 37.4486 17.9502C36.6272 18.3819 35.5697 18.6183 34.3479 18.1969C34.5122 19.4201 35.9291 20.3452 37.2638 20.7153C36.812 21.0647 36.2473 21.2086 35.8469 21.1573C36.0933 21.8665 36.2371 22.8122 35.7032 23.5625C35.0358 23.1205 34.6764 22.6683 34.4198 20.9517C34.1631 19.2248 32.9207 17.4671 31.9556 17.1176C31.9043 17.7241 31.9043 17.4568 32.0069 17.8577C34.5635 19.7388 33.1158 23.1308 35.7853 24.354C36.7607 23.2336 36.771 22.843 36.6272 21.7946C37.5924 21.5376 38.3111 20.7255 38.5678 20.0985C37.654 20.5302 36.2063 19.7696 35.8058 19.1734C37.387 19.122 38.8552 17.9297 40.3645 16.357C41.7096 14.9487 43.4961 15.1646 43.3523 16.2645C44.2764 16.1308 44.646 14.8562 44.338 14.0442C45.6933 13.6228 46.7714 12.6051 46.9151 11.0324C45.1081 11.9678 42.7876 10.4568 41.0627 12.307ZM43.2599 13.633C43.9786 14.2189 43.7425 15.0618 43.568 15.2571C42.9416 14.1573 40.9087 14.5479 38.9169 16.799C38.7731 16.9634 38.5883 17.1587 38.3727 17.354C38.5267 14.6609 36.3192 14.6095 35.6724 14.8871C35.7442 14.1059 36.2268 13.5816 36.4835 13.4994C35.8366 12.749 35.6929 11.8034 35.621 11.1147C36.6991 11.5772 38.2905 12.8415 38.5678 15.0104L39.2659 14.5376C39.0606 10.7446 39.1017 10.7549 39.0811 8.17489C39.0709 7.81512 39.0914 6.97224 40.2413 7.06476C40.2824 8.0207 40.4364 10.5699 40.3851 14.1059H40.7958C41.1654 13.1191 42.4693 11.9678 43.9889 12.0603C45.0362 12.1323 45.3853 12.1015 45.9808 11.8445C45.4879 13.0369 43.722 13.5508 43.2599 13.633ZM40.2824 6.4069C41.0217 5.88267 41.4837 5.64625 41.8738 5.42012C42.5104 5.44067 43.5988 5.36872 44.2559 5.03979C43.568 5.88267 43.4961 6.18076 42.3769 6.30411C43.8246 6.43774 44.4304 7.73289 45.1491 7.92819C42.726 8.658 42.4796 6.26299 40.2824 6.4069Z" />
    <path d="M31.1973 20.6537C31.0741 20.6537 30.9611 20.7154 30.8892 20.8079C30.7558 20.7873 30.612 20.7668 30.458 20.7462L30.4683 19.9547C30.612 19.8931 30.7044 19.7594 30.7044 19.595C30.7044 19.3791 30.5299 19.2044 30.3143 19.2044C30.0987 19.2044 29.9241 19.3894 29.9241 19.595C29.9241 19.7492 30.0063 19.8725 30.1295 19.9342L30.1192 20.6948C29.9857 20.6846 29.8522 20.664 29.7085 20.6537C29.6469 20.5201 29.5134 20.4173 29.3491 20.4173C29.1335 20.4173 28.959 20.5818 28.959 20.8079C28.959 21.0238 29.1335 21.1985 29.3491 21.1985C29.4826 21.1985 29.6161 21.1265 29.6777 21.0135C29.8317 21.034 29.9754 21.0443 30.1192 21.0649L30.1089 22.2161C29.9857 22.2778 29.9036 22.4114 29.9036 22.5656C29.9036 22.7815 30.0781 22.9562 30.2937 22.9562C30.5094 22.9562 30.6839 22.7815 30.6839 22.5656C30.6839 22.4011 30.5915 22.2675 30.4477 22.2058L30.458 21.106C30.5915 21.1265 30.7044 21.1471 30.8276 21.1677C30.8892 21.3218 31.0227 21.4349 31.1973 21.4349C31.4129 21.4349 31.5874 21.2602 31.5874 21.0443C31.5874 20.8285 31.4129 20.6537 31.1973 20.6537Z" />
    <path d="M27.7971 20.4274C27.6328 20.4274 27.4993 20.5199 27.4377 20.6638C27.3042 20.6741 27.1605 20.6844 27.027 20.705L27.0167 19.9443C27.1399 19.8826 27.2221 19.749 27.2221 19.6051C27.2221 19.3893 27.0475 19.2145 26.8319 19.2145C26.6163 19.2145 26.4418 19.3995 26.4418 19.6051C26.4418 19.7696 26.5342 19.9032 26.6779 19.9649L26.6882 20.7564C26.5444 20.7666 26.3904 20.7975 26.257 20.818C26.1954 20.7255 26.0824 20.6638 25.9489 20.6638C25.7333 20.6638 25.5588 20.8489 25.5588 21.0544C25.5588 21.2703 25.7333 21.445 25.9489 21.445C26.1235 21.445 26.2672 21.332 26.3186 21.1778C26.4418 21.1572 26.565 21.1367 26.6882 21.1161L26.6985 22.216C26.565 22.2674 26.4726 22.4113 26.4726 22.5757C26.4726 22.7916 26.6471 22.9663 26.8627 22.9663C27.0783 22.9663 27.2529 22.7916 27.2529 22.5757C27.2529 22.4216 27.1605 22.2982 27.0373 22.2263L27.027 21.075C27.1605 21.0544 27.3145 21.0442 27.4582 21.0236C27.5301 21.1367 27.6533 21.2086 27.7868 21.2086C28.0024 21.2086 28.1769 21.0339 28.1769 20.818C28.1872 20.6022 28.0127 20.4274 27.7971 20.4274Z" />
    <path d="M33.003 23.7989C32.7669 22.2159 32.1919 17.7857 32.1303 16.2952L31.4526 16.3261C31.4629 16.5831 31.4937 16.912 31.5245 17.3026C30.7134 17.0662 29.6559 16.8914 28.5675 16.8914C27.4895 16.8914 26.4217 17.0559 25.6105 17.3026C25.6413 16.912 25.6721 16.5831 25.6824 16.3261L25.0048 16.2952C24.9432 17.7754 24.3682 22.2057 24.132 23.7989C23.7213 23.9531 23.4647 24.3643 23.4647 25.0838C23.4647 25.0838 27.1404 25.1352 28.5675 25.1352C29.9844 25.1352 33.6601 25.0838 33.6601 25.0838C33.6704 24.354 33.4034 23.9531 33.003 23.7989ZM28.5675 23.7578C27.9823 24.8782 26.894 24.8371 25.9494 24.2101C25.5695 23.9634 25.1793 23.7989 24.8199 23.7372C24.9842 22.6374 25.2512 20.561 25.4565 18.8033C26.6783 18.2483 28.1979 18.1249 28.5675 19.5331C28.9372 18.1249 30.4465 18.2483 31.6785 18.8033C31.8736 20.561 32.1508 22.6271 32.3151 23.7372C31.9557 23.7989 31.5656 23.9634 31.1857 24.2101C30.2411 24.8371 29.1528 24.8679 28.5675 23.7578Z" />
    <path d="M49.1954 51.7887C48.7744 51.9223 48.2611 51.9943 47.4808 51.9943H46.5259C43.2198 51.9223 39.8316 50.9458 37.7473 48.8078C40.6222 45.9091 37.2442 43.5141 35.4166 45.9811C34.8519 46.752 34.3899 47.2968 33.9997 48.0471C33.6712 48.6536 33.9176 49.2498 34.6363 50.1749C35.0265 50.6786 36.0019 51.47 36.7925 51.9943H20.2928C21.0834 51.47 22.0588 50.6888 22.449 50.1749C23.1574 49.2498 23.4038 48.6433 23.0856 48.0471C22.6851 47.2968 22.2334 46.752 21.6584 45.9811C19.8308 43.5141 16.4529 45.9091 19.3277 48.8078C17.2434 50.9355 13.8552 51.9223 10.5491 51.9943H9.64561C8.87556 51.9943 8.35193 51.9223 7.93097 51.7887C7.25332 51.6242 7.09931 51.9223 7.46894 53.0941C7.72562 53.8753 7.9207 55.1602 8.01311 56.0442H49.1235C49.2057 55.1705 49.411 53.8856 49.6677 53.0941C50.0373 51.9223 49.8833 51.6242 49.1954 51.7887ZM36.3304 46.0838C36.8643 45.3643 37.6549 45.5596 37.9835 46.1661C38.3326 46.8034 37.8294 47.6051 37.1415 48.2219C36.2072 47.2043 36.1045 46.3922 36.3304 46.0838ZM34.9649 49.4656C34.6363 48.9928 34.5234 48.7255 34.6979 48.2733C34.8622 47.8313 35.2215 47.4407 35.5809 46.8959C36.1559 49.1367 39.5338 51.2747 42.0391 51.9943H38.0553C37.0183 51.4392 35.7246 50.5244 34.9649 49.4656ZM19.1018 46.1661C19.4304 45.5596 20.2107 45.3746 20.7446 46.0838C20.9705 46.3922 20.8781 47.2043 19.9335 48.2219C19.2558 47.6051 18.7527 46.8034 19.1018 46.1661ZM21.5147 46.8959C21.8843 47.4407 22.2334 47.8313 22.3976 48.2733C22.5722 48.7255 22.4592 49.0031 22.1307 49.4656C21.3709 50.5244 20.0772 51.4289 19.0402 51.9943H15.0668C17.5617 51.285 20.9397 49.147 21.5147 46.8959ZM48.4151 55.3966H8.72155C8.53674 54.1323 8.30059 53.3305 8.08498 52.6418H49.0414C48.8258 53.3305 48.5896 54.1426 48.4151 55.3966Z" />
    <path d="M14.1025 54.5023C14.1128 54.5023 14.1231 54.5126 14.1231 54.5229L14.2257 54.8107C14.236 54.8415 14.2257 54.8621 14.2052 54.8724C14.1847 54.8724 14.1744 54.8724 14.1744 54.8929C14.1744 54.9135 14.2052 54.9135 14.2463 54.9135H14.6878C14.7699 54.9135 14.7904 54.9135 14.7904 54.8929C14.7904 54.8724 14.7802 54.8724 14.7596 54.8724C14.7288 54.8724 14.698 54.8724 14.657 54.8621C14.6056 54.8518 14.5337 54.821 14.4516 54.6051C14.2976 54.2454 13.928 53.2894 13.8766 53.1558C13.8458 53.1044 13.8356 53.0838 13.815 53.0838C13.7945 53.0838 13.774 53.1147 13.7534 53.1763L13.1579 54.6565C13.1169 54.7799 13.0655 54.8518 12.9628 54.8621C12.9423 54.8621 12.9115 54.8621 12.891 54.8621C12.8704 54.8621 12.8602 54.8621 12.8602 54.8827C12.8602 54.9032 12.8807 54.9032 12.9012 54.9032H13.1785H13.4351C13.4557 54.9032 13.4762 54.9032 13.4762 54.8827C13.4762 54.8621 13.4659 54.8621 13.4351 54.8621H13.4043C13.3325 54.8621 13.3119 54.8313 13.3119 54.7901C13.3119 54.7696 13.3222 54.7079 13.3427 54.6565L13.3941 54.5229C13.4043 54.5023 13.4043 54.5023 13.4146 54.5023H14.1025V54.5023ZM13.4659 54.3893C13.4557 54.3893 13.4557 54.379 13.4557 54.3687L13.7534 53.5772C13.7534 53.5669 13.7637 53.5567 13.7637 53.5567C13.774 53.5567 13.774 53.5669 13.774 53.5772L14.0717 54.3687C14.0717 54.379 14.0717 54.3893 14.0614 54.3893H13.4659Z" />
    <path d="M15.2712 54.1527C15.2712 54.4919 15.3636 54.6769 15.4868 54.7797C15.6511 54.9339 15.877 54.9339 16.0002 54.9339C16.1542 54.9339 16.3287 54.9134 16.493 54.7695C16.6881 54.605 16.7189 54.3172 16.7189 54.0602V53.8135C16.7189 53.4537 16.7189 53.3921 16.7189 53.3201C16.7291 53.2379 16.7394 53.1968 16.801 53.1865C16.8318 53.1865 16.8524 53.1762 16.8729 53.1762C16.9037 53.1762 16.914 53.1659 16.914 53.1557C16.914 53.1351 16.9037 53.1351 16.8626 53.1351C16.7702 53.1351 16.6265 53.1454 16.5957 53.1454C16.5957 53.1454 16.4417 53.1351 16.3287 53.1351C16.2979 53.1351 16.2774 53.1351 16.2774 53.1557C16.2774 53.1659 16.2876 53.1762 16.3185 53.1762C16.339 53.1762 16.3801 53.1865 16.4006 53.1865C16.4725 53.2071 16.493 53.2379 16.5033 53.3201C16.5033 53.3921 16.5033 53.4537 16.5033 53.8135V54.1013C16.5033 54.3583 16.493 54.5639 16.3698 54.6872C16.2774 54.79 16.1439 54.8106 16.0412 54.8106C15.9591 54.8106 15.8564 54.8003 15.7435 54.7181C15.6305 54.6255 15.5587 54.4714 15.5587 54.1322V53.8032C15.5587 53.4435 15.5587 53.3818 15.5689 53.3098C15.5689 53.2276 15.5895 53.1865 15.6511 53.1762C15.6819 53.1762 15.6921 53.1659 15.7229 53.1659C15.7435 53.1659 15.764 53.1557 15.764 53.1454C15.764 53.1248 15.7435 53.1248 15.7127 53.1248C15.6305 53.1248 15.4765 53.1351 15.4252 53.1351C15.3533 53.1351 15.2096 53.1248 15.0864 53.1248C15.0556 53.1248 15.035 53.1248 15.035 53.1454C15.035 53.1557 15.0453 53.1659 15.0761 53.1659C15.1069 53.1659 15.148 53.1762 15.1685 53.1762C15.2506 53.1968 15.2712 53.2276 15.2712 53.3098C15.2712 53.3818 15.2712 53.4435 15.2712 53.8032V54.1527V54.1527Z" />
    <path d="M17.7144 54.2247C17.7144 54.4405 17.7144 54.6358 17.7042 54.7283C17.6939 54.8003 17.6836 54.8517 17.6323 54.8517C17.6118 54.862 17.581 54.862 17.5399 54.862C17.5091 54.862 17.4988 54.8722 17.4988 54.8825C17.4988 54.9031 17.5091 54.9031 17.5502 54.9031H17.8479C17.9608 54.9031 18.1765 54.9236 18.351 54.9236C18.7822 54.9236 19.0184 54.7592 19.1313 54.6461C19.2648 54.5125 19.388 54.2761 19.388 53.9883C19.388 53.7107 19.2751 53.5051 19.1519 53.3921C18.9054 53.1248 18.505 53.1248 18.2175 53.1248C18.0738 53.1248 17.93 53.1351 17.8582 53.1351C17.7863 53.1351 17.6426 53.1248 17.5194 53.1248C17.4886 53.1248 17.468 53.1248 17.468 53.1454C17.468 53.1557 17.4783 53.1659 17.5091 53.1659C17.5399 53.1659 17.581 53.1762 17.6015 53.1762C17.6734 53.1968 17.7042 53.2276 17.7042 53.3098C17.7144 53.3818 17.7144 53.4435 17.7144 53.8032V54.2247ZM18.0122 53.7724C18.0122 53.5874 18.0122 53.3818 18.0122 53.2996C18.0122 53.279 18.0225 53.2584 18.043 53.2482C18.0635 53.2379 18.1457 53.2276 18.197 53.2276C18.3818 53.2276 18.659 53.2584 18.8644 53.464C18.967 53.5565 19.0903 53.7518 19.0903 54.0499C19.0903 54.2863 19.0389 54.5125 18.8952 54.6461C18.7514 54.7695 18.5974 54.8106 18.3613 54.8106C18.1765 54.8106 18.0841 54.7592 18.0533 54.7181C18.043 54.6975 18.0327 54.5947 18.0327 54.533C18.0225 54.4919 18.0225 54.2966 18.0225 54.0602V53.7724H18.0122Z" />
    <path d="M20.9483 54.5023C20.9585 54.5023 20.9688 54.5126 20.9688 54.5229L21.0818 54.8107C21.092 54.8415 21.0715 54.8621 21.0612 54.8724C21.0304 54.8724 21.0202 54.8724 21.0202 54.8929C21.0202 54.9135 21.051 54.9135 21.092 54.9135H21.5335C21.6259 54.9135 21.6465 54.9135 21.6465 54.8929C21.6465 54.8724 21.6362 54.8724 21.6157 54.8724C21.5951 54.8724 21.5541 54.8724 21.513 54.8621C21.4616 54.8518 21.4 54.821 21.3076 54.6051C21.1536 54.2454 20.784 53.2894 20.7224 53.1558C20.7019 53.1044 20.6813 53.0838 20.6608 53.0838C20.6403 53.0838 20.63 53.1147 20.5992 53.1763L20.014 54.6565C19.9626 54.7799 19.9215 54.8518 19.8086 54.8621C19.7983 54.8621 19.7573 54.8621 19.7367 54.8621C19.7162 54.8621 19.7059 54.8621 19.7059 54.8827C19.7059 54.9032 19.7162 54.9032 19.747 54.9032H20.0242H20.2706C20.3014 54.9032 20.3117 54.9032 20.3117 54.8827C20.3117 54.8621 20.3014 54.8621 20.2809 54.8621H20.2398C20.168 54.8621 20.1474 54.8313 20.1474 54.7901C20.1474 54.7696 20.1577 54.7079 20.1782 54.6565L20.2296 54.5229C20.2296 54.5023 20.2398 54.5023 20.2501 54.5023H20.9483V54.5023ZM20.3117 54.3893C20.3014 54.3893 20.3014 54.379 20.3014 54.3687L20.5992 53.5772C20.5992 53.5669 20.6095 53.5567 20.6095 53.5567C20.6197 53.5567 20.6197 53.5669 20.6197 53.5772L20.9072 54.3687C20.9072 54.379 20.9072 54.3893 20.8969 54.3893H20.3117Z" />
    <path d="M23.2499 53.382C23.3218 53.2689 23.3732 53.2073 23.4245 53.197C23.4553 53.1867 23.4861 53.1867 23.5066 53.1867C23.5272 53.1867 23.5477 53.1764 23.5477 53.1661C23.5477 53.1456 23.5374 53.1456 23.5066 53.1456C23.4142 53.1456 23.3218 53.1559 23.2705 53.1559C23.2294 53.1559 23.1267 53.1456 23.0343 53.1456C23.0035 53.1456 22.983 53.1559 22.983 53.1661C22.983 53.1764 23.0035 53.1867 23.0138 53.1867C23.0343 53.1867 23.0651 53.1867 23.0857 53.197C23.1062 53.2073 23.1267 53.2175 23.1267 53.2381C23.1267 53.2587 23.1165 53.2998 23.1062 53.3409C23.0754 53.4026 22.8598 53.7315 22.7879 53.8343C22.6955 53.6801 22.5928 53.5053 22.4902 53.31C22.4696 53.2895 22.4696 53.2587 22.4696 53.2381C22.4696 53.2278 22.4799 53.2175 22.5004 53.197C22.521 53.197 22.5518 53.1867 22.562 53.1867C22.5826 53.1867 22.5928 53.1764 22.5928 53.1661C22.5928 53.1456 22.5826 53.1456 22.5518 53.1456C22.4594 53.1456 22.3362 53.1559 22.2951 53.1559C22.1821 53.1559 21.9973 53.1456 21.9357 53.1456C21.9049 53.1456 21.8844 53.1456 21.8844 53.1661C21.8844 53.1867 21.8947 53.1867 21.9049 53.1867C21.9255 53.1867 21.9665 53.197 22.0076 53.2073C22.0897 53.2278 22.1411 53.2792 22.2027 53.382L22.6134 54.0501L22.1616 54.6977C22.0795 54.8108 22.0384 54.8519 21.9665 54.8725C21.9255 54.8827 21.8947 54.8827 21.8741 54.8827C21.8536 54.8827 21.8433 54.893 21.8433 54.9033C21.8433 54.9238 21.8536 54.9238 21.8844 54.9238H21.9255H22.1205H22.3362H22.3772C22.408 54.9238 22.4286 54.9238 22.4286 54.9033C22.4286 54.893 22.4183 54.8827 22.3978 54.8827C22.3772 54.8827 22.3567 54.8827 22.3464 54.8827C22.3259 54.8725 22.3054 54.8622 22.3054 54.8416C22.3054 54.8211 22.3156 54.7799 22.3362 54.7491L22.6852 54.1838C22.7879 54.3585 22.9317 54.5949 23.0651 54.8211C23.0857 54.8519 23.0754 54.8725 23.0549 54.8725C23.0343 54.8827 23.0241 54.8827 23.0241 54.893C23.0241 54.9033 23.0446 54.9238 23.1062 54.9238H23.5272H23.599C23.6196 54.9238 23.6401 54.9238 23.6401 54.9033C23.6401 54.8827 23.6298 54.8827 23.6093 54.8827C23.5888 54.8827 23.558 54.8827 23.5169 54.8725C23.4553 54.8622 23.4142 54.8313 23.3834 54.7697C23.3321 54.6977 22.9419 54.0604 22.8701 53.9371L23.2499 53.382Z" />
    <path d="M27.0883 54.5023C27.0986 54.5023 27.1089 54.5126 27.1089 54.5229L27.2116 54.8107C27.2218 54.8415 27.2115 54.8621 27.191 54.8724C27.1705 54.8724 27.1602 54.8724 27.1602 54.8929C27.1602 54.9135 27.191 54.9135 27.2321 54.9135H27.6838C27.766 54.9135 27.7865 54.9135 27.7865 54.8929C27.7865 54.8724 27.7763 54.8724 27.7557 54.8724C27.7352 54.8724 27.6941 54.8724 27.6633 54.8621C27.612 54.8518 27.5401 54.821 27.458 54.6051C27.304 54.2454 26.9343 53.2894 26.8727 53.1558C26.8522 53.1044 26.8317 53.0838 26.8111 53.0838C26.7906 53.0838 26.7803 53.1147 26.7495 53.1763L26.1643 54.6565C26.1232 54.7799 26.0719 54.8518 25.9589 54.8621C25.9384 54.8621 25.9076 54.8621 25.8871 54.8621C25.8665 54.8621 25.8563 54.8621 25.8563 54.8827C25.8563 54.9032 25.8665 54.9032 25.8973 54.9032H26.1745H26.421C26.4518 54.9032 26.462 54.9032 26.462 54.8827C26.462 54.8621 26.4518 54.8621 26.4312 54.8621H26.4004C26.3286 54.8621 26.308 54.8313 26.308 54.7901C26.308 54.7696 26.3183 54.7079 26.3491 54.6565L26.4004 54.5229C26.3902 54.5126 26.4004 54.5023 26.4004 54.5023H27.0883ZM26.4518 54.3893C26.4415 54.3893 26.4415 54.379 26.4415 54.3687L26.729 53.5772C26.7393 53.5669 26.7393 53.5567 26.7495 53.5567C26.7495 53.5567 26.7598 53.5669 26.7598 53.5772L27.0575 54.3687C27.0575 54.379 27.0575 54.379 27.0473 54.379H26.4518V54.3893Z" />
    <path d="M28.5366 54.2247C28.5366 54.4406 28.5366 54.6359 28.5263 54.7284C28.516 54.8003 28.5058 54.8517 28.4544 54.8517C28.4339 54.862 28.4031 54.862 28.3723 54.862C28.3415 54.862 28.3312 54.862 28.3312 54.8826C28.3312 54.9031 28.3518 54.9031 28.3826 54.9031H28.6803H29.0499C29.0705 54.9031 29.091 54.9031 29.091 54.8826C29.091 54.8723 29.0807 54.862 29.0499 54.862C29.0191 54.862 28.9678 54.862 28.937 54.8517C28.8651 54.8414 28.8446 54.79 28.8446 54.7284C28.8343 54.6256 28.8343 54.4406 28.8343 54.2144V53.2688L29.1321 53.279C29.3374 53.2893 29.399 53.351 29.4093 53.4127V53.4332C29.4196 53.4641 29.4196 53.4743 29.4298 53.4743C29.4401 53.4743 29.4504 53.4641 29.4504 53.4435C29.4504 53.3818 29.4606 53.2174 29.4606 53.166C29.4606 53.1351 29.4606 53.1146 29.4401 53.1146C29.4196 53.1146 29.3682 53.1351 29.2142 53.1351H28.2901C28.208 53.1351 28.1259 53.1248 28.054 53.1248C27.9924 53.1146 27.9719 53.094 27.9513 53.094C27.9411 53.094 27.9308 53.1043 27.9205 53.1351C27.9103 53.1557 27.8795 53.3715 27.8795 53.4024C27.8795 53.4332 27.8795 53.4435 27.9 53.4435C27.9205 53.4435 27.9205 53.4332 27.9308 53.4127C27.9308 53.3921 27.9513 53.3613 27.9719 53.3304C28.0129 53.2688 28.0643 53.2688 28.1977 53.2585L28.5468 53.2482V54.2247H28.5366Z" />
    <path d="M32.6248 54.0398C32.6248 54.0295 32.6248 54.0295 32.6454 54.0295C32.6864 54.0295 32.9329 54.0295 32.9945 54.0398C33.0663 54.0501 33.1074 54.0912 33.1177 54.1118C33.1279 54.1426 33.1279 54.1735 33.1279 54.194C33.1279 54.2043 33.1382 54.2248 33.1485 54.2248C33.169 54.2248 33.169 54.194 33.169 54.1734C33.169 54.1529 33.1793 54.0501 33.1793 54.009C33.1895 53.937 33.1998 53.8754 33.1998 53.8651C33.1998 53.8548 33.1998 53.8445 33.1895 53.8445C33.169 53.8445 33.169 53.8548 33.1587 53.8651C33.1382 53.8856 33.1074 53.9062 33.0561 53.9062C33.0253 53.9165 32.9842 53.9165 32.9534 53.9165H32.6556C32.6351 53.9165 32.6351 53.9062 32.6351 53.8959V53.31C32.6351 53.2792 32.6454 53.2792 32.6556 53.2792H33.015C33.1074 53.2792 33.1587 53.3203 33.169 53.3511C33.1895 53.382 33.1895 53.4231 33.1895 53.4436C33.1895 53.4745 33.1998 53.4848 33.2101 53.4848C33.2203 53.4848 33.2306 53.4745 33.2306 53.4539C33.2409 53.4334 33.2409 53.2895 33.2409 53.2586C33.2511 53.1969 33.2614 53.1661 33.2614 53.1558C33.2614 53.1455 33.2511 53.1353 33.2511 53.1353C33.2409 53.1353 33.2306 53.1455 33.2101 53.1558C33.1895 53.1558 33.1587 53.1558 33.1074 53.1661C33.0561 53.1661 32.5735 53.1661 32.4914 53.1661C32.4195 53.1661 32.2757 53.1558 32.1525 53.1558C32.1115 53.1558 32.1012 53.1558 32.1012 53.1764C32.1012 53.1867 32.1115 53.1969 32.1423 53.1969C32.1731 53.1969 32.2141 53.2072 32.2347 53.2072C32.3168 53.2278 32.3271 53.2586 32.3373 53.3408C32.3476 53.4128 32.3476 53.4745 32.3476 53.8342V54.2454C32.3476 54.4818 32.3476 54.6566 32.3373 54.7491C32.3271 54.821 32.3168 54.8724 32.2655 54.8724C32.2449 54.8827 32.2141 54.8827 32.1731 54.8827C32.1423 54.8827 32.1423 54.893 32.1423 54.9033C32.1423 54.9238 32.1525 54.9238 32.1936 54.9238H32.4914H32.8507C32.8918 54.9238 32.902 54.9238 32.902 54.9033C32.902 54.893 32.8918 54.8827 32.8712 54.8827C32.8302 54.8827 32.7788 54.8827 32.748 54.8724C32.6762 54.8621 32.6659 54.821 32.6556 54.7491C32.6454 54.6463 32.6454 54.4818 32.6454 54.2454V54.0398H32.6248Z" />
    <path d="M34.1327 54.2248C34.1327 54.4613 34.1327 54.636 34.1224 54.7491C34.1122 54.8107 34.1019 54.8519 34.0506 54.8621C34.03 54.8724 33.9992 54.8724 33.9684 54.8724C33.9376 54.8724 33.9274 54.8724 33.9274 54.893C33.9274 54.9135 33.9479 54.9135 33.9787 54.9135H34.2765H34.6461C34.6666 54.9135 34.6871 54.9135 34.6871 54.893C34.6871 54.8827 34.6769 54.8724 34.6461 54.8724C34.605 54.8724 34.5537 54.8724 34.5229 54.8621C34.451 54.8519 34.4305 54.8107 34.4305 54.7491C34.4202 54.6463 34.4202 54.4613 34.4202 54.2248V53.8137C34.4202 53.4539 34.4202 53.3922 34.4202 53.3203C34.4202 53.2278 34.4407 53.1969 34.5126 53.1867C34.5331 53.1867 34.5537 53.1764 34.5845 53.1764C34.605 53.1764 34.6255 53.1661 34.6255 53.1558C34.6255 53.1455 34.605 53.1353 34.5742 53.1353C34.4818 53.1353 34.3483 53.1456 34.2867 53.1456C34.2251 53.1456 34.0711 53.1353 33.989 53.1353C33.9479 53.1353 33.9376 53.1353 33.9376 53.1558C33.9376 53.1764 33.9479 53.1764 33.9787 53.1764C34.0095 53.1764 34.03 53.1867 34.0608 53.1867C34.1122 53.2072 34.1327 53.2381 34.143 53.3203C34.143 53.3922 34.143 53.4539 34.143 53.8137V54.2248H34.1327Z" />
    <path d="M35.539 54.2247C35.539 54.4405 35.539 54.6358 35.5287 54.7283C35.5185 54.8003 35.5082 54.8517 35.4568 54.8517C35.4363 54.862 35.4055 54.862 35.3644 54.862C35.3439 54.862 35.3234 54.8722 35.3234 54.8825C35.3234 54.9031 35.3439 54.9031 35.3747 54.9031H35.6725C35.7854 54.9031 36.001 54.9236 36.1756 54.9236C36.6068 54.9236 36.8532 54.7592 36.9661 54.6461C37.0996 54.5125 37.2228 54.2761 37.2228 53.9883C37.2228 53.7107 37.1099 53.5051 36.9867 53.3921C36.73 53.1248 36.3398 53.1248 36.0421 53.1248C35.9086 53.1248 35.7546 53.1351 35.6827 53.1351C35.6211 53.1351 35.4671 53.1248 35.3439 53.1248C35.3028 53.1248 35.2926 53.1248 35.2926 53.1454C35.2926 53.1557 35.3028 53.1659 35.3336 53.1659C35.3542 53.1659 35.4055 53.1762 35.426 53.1762C35.4979 53.1968 35.5185 53.2276 35.5287 53.3098C35.5287 53.3818 35.5287 53.4435 35.5287 53.8032V54.2247H35.539ZM35.8265 53.7724V53.2996C35.8265 53.279 35.8367 53.2584 35.8675 53.2482C35.8881 53.2379 35.9702 53.2276 36.0113 53.2276C36.1961 53.2276 36.4733 53.2584 36.6889 53.464C36.7813 53.5565 36.9045 53.7518 36.9045 54.0499C36.9045 54.2863 36.8635 54.5125 36.7095 54.6461C36.5657 54.7695 36.4117 54.8106 36.1756 54.8106C35.9908 54.8106 35.8983 54.7592 35.8675 54.7181C35.847 54.6975 35.847 54.5947 35.8367 54.533C35.8265 54.4919 35.8265 54.2966 35.8265 54.0602V53.7724Z" />
    <path d="M38.0451 54.2247C38.0451 54.4405 38.0451 54.6358 38.0348 54.7283C38.0246 54.8003 38.0143 54.8517 37.9732 54.8517C37.9527 54.862 37.9219 54.862 37.8808 54.862C37.85 54.862 37.8398 54.862 37.8398 54.8825C37.8398 54.9031 37.8603 54.9031 37.8911 54.9031H38.1888C38.3223 54.9031 38.4866 54.9134 38.8357 54.9134C38.9281 54.9134 38.9486 54.9134 38.9589 54.8517C38.9692 54.8003 38.9897 54.6461 38.9897 54.5844C38.9897 54.5639 38.9897 54.533 38.9692 54.533C38.9486 54.533 38.9486 54.5536 38.9486 54.5742C38.9281 54.6667 38.9076 54.7283 38.846 54.7489C38.7844 54.7797 38.6919 54.7797 38.6303 54.7797C38.3942 54.7797 38.3531 54.7386 38.3531 54.5844V54.2144V54.0294C38.3531 54.0191 38.3531 54.0088 38.3737 54.0088C38.425 54.0088 38.6509 54.0088 38.7022 54.0191C38.7843 54.0294 38.8254 54.0602 38.8357 54.1116C38.846 54.1424 38.846 54.1733 38.846 54.1938C38.846 54.2144 38.846 54.2144 38.8665 54.2144C38.887 54.2144 38.887 54.1836 38.887 54.1733C38.887 54.163 38.8973 54.0602 38.8973 54.0191C38.9076 53.8957 38.9178 53.8546 38.9178 53.8443C38.9178 53.8238 38.9076 53.8238 38.8973 53.8238C38.887 53.8238 38.8768 53.8341 38.8665 53.8546C38.846 53.8752 38.8152 53.8855 38.7535 53.8855C38.7022 53.8957 38.425 53.8957 38.3839 53.8957C38.3634 53.8957 38.3634 53.8855 38.3634 53.8649V53.279C38.3634 53.2584 38.3634 53.2584 38.3839 53.2584C38.425 53.2584 38.6714 53.2584 38.7125 53.2584C38.8254 53.279 38.8562 53.2996 38.8665 53.351C38.8768 53.3818 38.887 53.4229 38.887 53.4435C38.887 53.464 38.8973 53.4743 38.9076 53.4743C38.9281 53.4743 38.9281 53.464 38.9384 53.4537C38.9486 53.4229 38.9486 53.3201 38.9486 53.2996C38.9589 53.1968 38.9692 53.1659 38.9692 53.1454C38.9692 53.1351 38.9692 53.1248 38.9589 53.1248C38.9486 53.1248 38.9281 53.1351 38.9281 53.1351C38.9076 53.1454 38.8768 53.1454 38.8254 53.1454C38.7844 53.1454 38.3121 53.1454 38.2402 53.1454C38.1786 53.1454 38.0246 53.1351 37.9116 53.1351C37.8706 53.1351 37.8603 53.1351 37.8603 53.1557C37.8603 53.1659 37.8706 53.1762 37.9014 53.1762C37.9322 53.1762 37.9732 53.1865 37.9938 53.1865C38.0759 53.2071 38.0964 53.2379 38.0964 53.3201C38.0964 53.3921 38.0964 53.4537 38.0964 53.8135V54.2247H38.0451Z" />
    <path d="M40.1699 53.8137C40.1699 53.4539 40.1699 53.3922 40.1699 53.3203C40.1699 53.2381 40.1904 53.1969 40.252 53.1867C40.2828 53.1867 40.3239 53.1764 40.3444 53.1764C40.3753 53.1764 40.3855 53.1661 40.3855 53.1558C40.3855 53.1353 40.3752 53.1353 40.3342 53.1353C40.2418 53.1353 40.0672 53.1456 40.0159 53.1456C39.9543 53.1456 39.8105 53.1353 39.6976 53.1353C39.6565 53.1353 39.6463 53.1353 39.6463 53.1558C39.6463 53.1661 39.6565 53.1764 39.6873 53.1764C39.7181 53.1764 39.7489 53.1867 39.7695 53.1867C39.8413 53.2072 39.8619 53.2381 39.8722 53.3203C39.8722 53.3922 39.8722 53.4539 39.8722 53.8137V54.2248C39.8722 54.451 39.8722 54.636 39.8619 54.7285C39.8516 54.8005 39.8413 54.8519 39.79 54.8519C39.7695 54.8621 39.7387 54.8621 39.6976 54.8621C39.6771 54.8621 39.6668 54.8724 39.6668 54.8827C39.6668 54.9033 39.6771 54.9033 39.7181 54.9033H40.0159C40.2007 54.9033 40.365 54.9135 40.7038 54.9135C40.827 54.9135 40.8373 54.9033 40.8578 54.8416C40.8784 54.7799 40.8886 54.5949 40.8886 54.5641C40.8886 54.5332 40.8886 54.5229 40.8681 54.5229C40.8475 54.5229 40.8475 54.5332 40.8475 54.5641C40.8373 54.6052 40.8167 54.6771 40.7859 54.708C40.7346 54.7696 40.6422 54.7696 40.5087 54.7696C40.3239 54.7696 40.2726 54.7594 40.2315 54.7182C40.1904 54.6771 40.1904 54.5127 40.1904 54.2043V53.8137H40.1699Z" />
    <path d="M41.6388 54.2248C41.6388 54.4613 41.6388 54.636 41.6286 54.7491C41.6183 54.8107 41.608 54.8519 41.5567 54.8621C41.5362 54.8724 41.5054 54.8724 41.4643 54.8724C41.4335 54.8724 41.4232 54.8724 41.4232 54.893C41.4232 54.9135 41.4438 54.9135 41.4746 54.9135H41.7723H42.1419C42.1625 54.9135 42.183 54.9135 42.183 54.893C42.183 54.8827 42.1727 54.8724 42.1419 54.8724C42.1111 54.8724 42.0598 54.8724 42.029 54.8621C41.9571 54.8519 41.9366 54.8107 41.9366 54.7491C41.9263 54.6463 41.9263 54.4613 41.9263 54.2248V53.8137C41.9263 53.4539 41.9263 53.3922 41.9366 53.3203C41.9469 53.2278 41.9571 53.1969 42.029 53.1867C42.0598 53.1867 42.0701 53.1764 42.1009 53.1764C42.1214 53.1764 42.1317 53.1661 42.1317 53.1558C42.1317 53.1455 42.1111 53.1353 42.0906 53.1353C41.9982 53.1353 41.8647 53.1456 41.8031 53.1456C41.7312 53.1456 41.5875 53.1353 41.4951 53.1353C41.4643 53.1353 41.4438 53.1353 41.4438 53.1558C41.4438 53.1764 41.454 53.1764 41.4746 53.1764C41.5054 53.1764 41.5362 53.1867 41.567 53.1867C41.6183 53.2072 41.6491 53.2381 41.6491 53.3203C41.6594 53.3922 41.6594 53.4539 41.6594 53.8137V54.2248H41.6388Z" />
    <path d="M43.2613 54.9443C43.3845 54.9443 43.518 54.9237 43.6412 54.8518C43.8055 54.749 43.8568 54.5742 43.8568 54.4406C43.8568 54.2145 43.7541 54.0603 43.4769 53.8341L43.4051 53.7828C43.2202 53.6388 43.1586 53.5463 43.1586 53.4538C43.1586 53.3099 43.2613 53.2071 43.4359 53.2071C43.5899 53.2071 43.6515 53.2791 43.6823 53.3305C43.7336 53.3819 43.7439 53.4641 43.7439 53.4847C43.7439 53.5052 43.7541 53.5258 43.7644 53.5258C43.7747 53.5258 43.7849 53.5052 43.7849 53.4641C43.7849 53.2688 43.7952 53.2071 43.7952 53.1763C43.7952 53.1557 43.7849 53.1455 43.7644 53.1455C43.7028 53.1249 43.6001 53.1043 43.4564 53.1043C43.1278 53.1043 42.9122 53.2894 42.9122 53.5463C42.9122 53.7416 43.0046 53.9061 43.2613 54.1014L43.3743 54.1836C43.5693 54.3378 43.6001 54.4509 43.6001 54.564C43.6001 54.6873 43.4975 54.8312 43.2818 54.8312C43.1381 54.8312 43.0046 54.7695 42.9533 54.5948C42.943 54.5537 42.9328 54.5023 42.9328 54.4817C42.9328 54.4612 42.9328 54.4406 42.9122 54.4406C42.8917 54.4406 42.8917 54.4714 42.8814 54.5023C42.8814 54.5434 42.8712 54.6873 42.8712 54.8107C42.8712 54.862 42.8814 54.8826 42.9122 54.8929C43.0149 54.934 43.1176 54.9443 43.2613 54.9443Z" />
    <path d="M36.187 6.54051C36.2075 6.19103 35.5504 5.92377 35.3964 5.90322C35.1192 5.88266 34.7804 6.45828 34.421 6.82832C34.1027 5.13229 34.267 4.41276 34.4518 3.66239C35.1602 4.95755 36.1254 5.23508 36.6387 5.17341C34.9138 3.79602 35.2116 2.55226 34.688 2.49059C34.3902 2.45975 34.1746 2.48031 34.0206 2.48031C33.4251 2.48031 33.3429 3.64184 33.2608 4.17634C32.8706 3.44654 32.4907 2.85035 31.8234 2.00748C31.1868 0.383396 30.4167 0.794556 29.6262 0.0544684C30.2422 0.979578 29.7391 1.5552 31.1663 2.23362C31.5359 2.5831 31.9671 3.12789 32.2546 3.58016C32.0184 3.88853 31.8542 4.07355 31.6386 4.28941C31.464 4.55667 31.3716 5.56401 30.8274 6.32465C31.6386 5.96489 31.9568 5.4715 32.2443 4.98838C34.8112 6.92084 32.7269 11.8753 32.1417 12.9649C31.5769 12.5846 30.8582 12.3687 30.1909 12.2556L30.119 12.0295L29.5132 10.0765H29.7904C30.1087 10.0765 30.1806 9.86063 30.1395 9.68588L31.9055 10.2307L32.6858 10.4774L32.2135 9.80923L31.3921 8.66826L32.2135 7.53758L32.6858 6.86944L31.9055 7.10586L30.3141 7.59925C30.2011 7.23948 29.9034 7.06474 29.5748 7.02363L30.1087 5.21452L30.3346 4.4436L29.6878 4.91643L28.5584 5.73875L27.4187 4.91643L26.7718 4.4436L26.9977 5.21452L27.5316 7.02363C27.2031 7.07502 26.9156 7.23948 26.7924 7.59925L25.2009 7.10586L24.4411 6.86944L24.9134 7.53758L25.7348 8.66826L24.9134 9.80923L24.4411 10.4774L25.2215 10.2307L26.9977 9.68588C26.9464 9.86063 27.008 10.0765 27.3365 10.0765H27.6138L27.008 12.0295L26.9464 12.2556C26.2687 12.379 25.5295 12.5948 24.9545 12.9957C23.2296 9.64477 23.7122 6.2527 25.1599 5.12201C25.1393 5.83126 25.7554 6.79749 26.0531 7.00307C25.858 6.27326 26.1969 4.95755 25.8067 4.62862C25.5398 4.40248 25.1393 4.28941 24.7081 4.29969C25.0059 3.81658 25.4063 3.21012 26.0839 2.30557C27.1004 1.82246 27.3981 0.640371 27.6446 0.0441895C26.5357 0.455349 25.7246 1.02069 25.55 1.95608C25.1599 2.47003 24.7286 3.08677 24.2461 3.8063C24.2666 2.93259 23.784 2.62422 23.1475 2.5831C21.2788 2.9737 21.4226 4.32025 19.8311 5.24536C20.9195 5.62568 22.6341 3.23068 23.2193 3.49793C23.3117 4.96783 22.9729 6.12935 22.9729 6.93111C22.6957 6.62274 22.552 6.40689 22.3158 6.37605C22.0899 6.33493 21.4636 6.38633 21.0427 6.85916C20.9195 7.59925 20.9503 8.99719 20.2521 10.6829C21.2891 9.727 21.7819 7.85622 21.9565 7.32172C22.2234 7.68148 22.5109 8.49352 22.5725 9.18221C22.6957 10.5185 23.5171 12.749 24.2255 13.8283C24.0305 14.1984 23.9791 14.6198 24.0407 15.0926C23.4966 15.4935 23.435 16.0589 23.6198 16.4392C23.8251 16.8503 24.359 17.1176 24.9853 16.8812L25.1804 16.7989C25.8375 16.5317 27.0696 16.0177 28.5584 16.0177C30.0471 16.0177 31.2792 16.5317 31.9363 16.7989L32.1314 16.8812C32.7577 17.1279 33.2916 16.8606 33.4867 16.4392C33.6818 16.0589 33.6201 15.4935 33.076 15.0926C33.1479 14.589 33.076 14.1367 32.8398 13.7461L32.8604 13.7666C34.1335 11.9473 34.2157 8.48324 35.2732 7.48618C35.3656 8.6991 36.0124 9.70644 36.649 9.85035C36.1562 8.96636 36.1562 7.30116 36.187 6.54051ZM30.3551 8.15431L31.2895 7.8665L30.8274 8.49352L30.7145 8.65798L30.8377 8.82245L31.2997 9.45975L30.1087 9.0897C30.2114 8.84301 30.3038 8.56547 30.3551 8.15431ZM25.8478 9.44947L26.3098 8.81217L26.433 8.64771L26.3098 8.48324L25.8478 7.85622L26.7821 8.14404C26.8334 8.5552 26.9258 8.82245 27.0285 9.06914L25.8478 9.44947ZM29.5851 9.1411H28.8356L28.928 7.81511C30.0368 7.332 29.9342 8.35989 29.5851 9.1411ZM29.3592 11.3922L28.7226 10.9296L28.5686 10.8166L28.4043 10.9296L27.778 11.3922L28.1887 10.0662H28.9485L29.3592 11.3922ZM28.4043 6.29382L28.5686 6.40689L28.7226 6.29382L29.3695 5.83126L28.9998 7.07502C28.9896 7.0853 28.9793 7.0853 28.969 7.0853C28.9074 6.93111 28.7432 6.82832 28.5686 6.82832C28.3941 6.82832 28.2401 6.93111 28.1785 7.0853C28.1682 7.0853 28.1477 7.0853 28.1374 7.07502L27.7678 5.83126L28.4043 6.29382ZM27.5624 9.1411C27.2031 8.35989 27.1004 7.32172 28.2093 7.81511L28.3017 9.1411H27.5624ZM28.5686 11.495L29.4516 12.1323C29.0717 12.0912 28.7534 12.0912 28.5686 12.0912C28.3735 12.0912 28.0553 12.1014 27.6856 12.1323L28.5686 11.495ZM24.934 16.1205L24.7492 16.2028C24.4822 16.3056 24.3077 16.2233 24.2461 16.1C24.1742 15.9663 24.2153 15.7402 24.5438 15.5346C24.5849 15.5141 24.6362 15.4832 24.6773 15.4627L25.3036 15.9766C25.1599 16.028 25.0367 16.0794 24.934 16.1205ZM27.0593 15.4421L26.4125 14.7945C26.9464 14.6609 27.5111 14.5684 28.0655 14.5273L28.4557 15.2879C27.9526 15.2982 27.4905 15.3599 27.0593 15.4421ZM30.6632 15.5757L30.2833 14.702C30.8685 14.8151 31.4229 14.9796 31.9055 15.1851L32.1314 16.0897C31.7618 15.9355 31.2689 15.7402 30.6632 15.5757ZM28.5686 13.8386C27.3365 13.8386 25.9504 14.1367 24.8826 14.5992C24.9032 14.3628 24.9853 14.1572 25.1291 13.9722C25.7451 13.2219 27.3673 12.9546 28.5686 12.9546C29.7596 12.9546 31.3819 13.2219 31.9979 13.9722C32.1519 14.147 32.2341 14.3628 32.2443 14.589C31.1868 14.1264 29.8212 13.8386 28.5686 13.8386Z" />
    <path d="M20.0966 34.8181C19.6243 34.8181 19.3163 34.8284 19.3163 34.8284C19.2034 36.1955 19.2547 37.4392 19.4395 38.5699C19.9221 37.7682 20.4149 36.9664 20.3944 36.4011C20.3636 35.8151 20.2301 35.2909 20.0966 34.8181Z" />
    <path d="M20.4376 34.818C20.5711 35.2908 20.6943 35.8048 20.7148 36.3804C20.7354 37.0485 20.2426 37.8708 19.7189 38.7445C19.6573 38.8473 19.5957 38.9501 19.5444 39.0529C21.0639 46.5052 28.2613 48.9927 28.2613 48.9927V34.8283C28.2613 34.8283 22.8402 34.8077 20.4376 34.818ZM25.8382 43.6785C25.4789 43.7504 24.9142 43.7915 24.5343 43.7915C24.1544 43.7915 23.5794 43.7504 23.2303 43.6785C23.2714 43.5243 23.3228 43.3084 23.3638 43.0926C23.0969 43.0617 22.8197 42.9692 22.604 42.887C22.717 42.4964 22.8915 42.1161 23.0353 41.5918C23.5178 41.7049 23.9901 41.7357 24.5343 41.7357C25.0785 41.7357 25.5508 41.6946 26.0333 41.5918C26.1771 42.1161 26.3516 42.4964 26.4646 42.887C26.2489 42.9692 25.9717 43.0617 25.7048 43.0926C25.7561 43.3084 25.8074 43.5243 25.8382 43.6785ZM22.8915 40.5742C23.1585 40.4817 24.216 40.42 24.5343 40.42C24.8423 40.42 25.8999 40.4817 26.1771 40.5742C26.2079 40.7078 26.2079 40.9134 26.1873 41.0573C25.7766 41.1807 25.0682 41.2423 24.5343 41.2423C24.0004 41.2423 23.2919 41.1807 22.8813 41.0573C22.8607 40.9031 22.8607 40.7078 22.8915 40.5742ZM26.8958 37.7783C26.4954 38.7343 26.1052 39.7211 25.9923 40.0191C25.7766 39.9883 25.5508 39.9677 25.3249 39.9575C25.5918 39.1249 25.9204 37.9325 26.1976 37.1821C26.3824 36.6579 27.2654 36.8841 26.8958 37.7783ZM24.5343 36.3804C24.5959 35.9384 25.8485 35.8562 25.6124 36.8327C25.3762 37.8092 25.0785 38.9604 24.8526 39.9472C24.7499 39.9472 24.637 39.9369 24.5343 39.9369C24.4316 39.9369 24.3187 39.9472 24.216 39.9472C23.9901 38.9604 23.6924 37.8194 23.4562 36.8327C23.2201 35.8562 24.4727 35.9384 24.5343 36.3804ZM22.8915 37.1821C23.1585 37.9325 23.4973 39.1249 23.7642 39.9575C23.5281 39.9677 23.3022 39.9883 23.0969 40.0191C22.9737 39.7211 22.5835 38.7343 22.1831 37.7783C21.7929 36.8841 22.6964 36.6579 22.8915 37.1821Z" />
    <path d="M36.166 36.216L36.1455 35.8665H36.5048C36.9771 35.8665 37.2133 35.4039 37.3468 34.8694C35.4986 34.8592 28.8762 34.8797 28.8762 34.8797V41.7152C29.4307 41.3041 29.9543 40.9752 30.6525 40.749V39.5669V39.2483H30.9605H31.3404C31.3815 37.6037 31.7716 36.401 32.5417 35.6095L32.7675 35.3731L32.9934 35.6095C33.7635 36.401 34.1536 37.5934 34.1947 39.2483H34.6054H34.9134V39.5669V40.8518C35.6732 41.1602 36.1763 41.6433 36.5665 42.1572C37.1928 40.8827 37.6548 39.4128 37.8191 37.7064C37.7883 37.7064 37.7575 37.7167 37.7164 37.7167C36.9874 37.7064 36.2276 37.1925 36.166 36.216Z" />
    <path d="M37.8183 34.8694C37.8183 34.8694 37.7567 34.8694 37.6849 34.8694C37.5206 35.6506 37.1612 36.1851 36.5041 36.1954C36.5555 36.9766 37.1407 37.3775 37.7054 37.3775C37.7465 37.3775 37.7978 37.3672 37.8389 37.3569C37.8902 36.5654 37.9005 35.7534 37.8183 34.8694Z" />
    <path d="M32.7573 41.0882C30.7551 41.0882 29.9748 41.6536 28.8762 42.4965V49.0339C28.8762 49.0339 33.6403 47.3893 36.2379 42.7843C35.6321 41.8797 34.7594 41.0882 32.7573 41.0882ZM34.4 43.7299L33.7943 43.0412L32.7675 43.9561L33.1885 44.4392C33.1885 44.4392 33.6197 44.2336 33.9996 44.6756C33.7121 44.9223 33.2193 45.354 32.9216 45.611C32.5417 45.169 32.8086 44.7784 32.8086 44.7784L32.3876 44.2953L31.135 45.426L30.7243 44.9531L32.0078 43.8738L31.5457 43.3393C31.5457 43.3393 31.3814 43.4935 31.1248 43.7094C30.7551 43.2879 30.4677 42.7329 30.7346 42.0236C31.4636 41.8592 31.977 42.2292 32.3466 42.6404C32.1002 42.8562 31.9256 43.0104 31.9256 43.0104L32.3876 43.5552L33.4349 42.6712L32.8599 41.962C33.4041 41.9003 33.8764 42.0853 34.1434 42.3937C34.4103 42.702 34.5335 43.1954 34.4 43.7299Z" />
    <path d="M19.5855 31.313C20.0886 31.7241 20.2837 32.0325 20.1297 33.4407C20.1091 33.6154 20.2016 33.9444 20.3042 34.3041H37.4301C37.4507 34.1191 37.4609 33.9341 37.4609 33.7799C37.4712 33.009 37.3377 32.4025 37.0811 32.1456C36.9989 32.0633 36.9065 32.0222 36.7525 32.0222C36.7422 32.0222 36.732 32.0222 36.732 32.0222L36.0441 32.0942L36.4137 31.5083C36.773 30.9326 37.2864 30.6037 37.8306 30.5626V25.4745H19.3494V31.1588C19.411 31.1999 19.4828 31.2307 19.5342 31.2718L19.5855 31.313ZM30.4689 30.6345V30.2748L29.627 30.2645C29.8323 29.3805 31.5572 28.2498 32.3273 27.9826C32.2862 27.0163 33.5491 26.6977 34.5758 26.6669C35.8387 26.636 36.1365 27.9928 36.1365 28.4143C36.1365 28.9693 35.9927 30.2131 35.2945 30.5934C34.2781 31.1485 33.4156 30.3776 33.4156 29.6889C33.4156 28.9282 33.9495 28.476 34.853 28.5787C35.7668 28.6815 35.695 28.1676 35.0071 27.9928C34.6682 27.9106 33.2205 27.8284 32.738 28.9077C32.4608 28.918 32.163 28.8049 31.9885 28.6301C31.8036 28.8768 31.5059 29.0413 31.1055 29.1544C31.4546 29.8739 32.1733 29.7505 32.6045 29.4113C32.5942 29.5039 32.584 29.6066 32.584 29.7197C32.584 31.4774 34.4629 31.9297 35.6231 31.2718C35.428 31.8372 35.5204 32.567 35.6026 33.0501H31.0541C31.1363 32.5567 31.7318 32.0119 32.2451 31.6522L31.8447 31.0149C31.3519 31.2307 30.8899 31.426 30.356 31.5699C29.0931 31.8989 29.1649 31.0046 30.4689 30.6345ZM27.2655 32.0736C27.0909 32.3306 26.0129 32.6595 25.7459 32.495C25.2942 32.2175 25.0683 31.6316 25.1812 31.3746C25.3147 31.0457 26.4954 30.7168 26.8753 30.8401C27.2449 30.9737 27.4092 31.8577 27.2655 32.0736ZM20.9613 29.2674C21.9675 28.7021 22.4809 28.2807 23.0148 27.4378C22.6144 27.2425 22.1523 26.893 21.8033 26.3996C23.713 26.9341 24.6781 27.2116 26.9164 26.4099C26.5468 26.9958 26.0026 27.3453 25.5406 27.6331C26.0539 28.476 26.557 29.4319 26.7316 30.2028C26.0539 30.1514 25.2942 30.3159 24.75 30.8093C23.9081 30.8504 22.8505 31.1177 22.255 29.2058C21.9573 29.3599 21.6492 29.5655 21.6492 29.5655C21.9881 30.8093 22.6246 31.6624 24.2982 31.4877C24.3906 31.8886 24.4625 32.1147 24.6678 32.4436C23.9799 32.8445 22.255 33.8621 20.9408 32.6903V29.2674H20.9613Z" />
    <path d="M19.3494 31.5494V34.2939H19.9551C19.8525 33.9341 19.7601 33.6155 19.7909 33.3893C19.9449 32.0119 19.7395 31.868 19.3494 31.5494Z" />
    <path d="M37.8187 34.2938V30.8812C37.4183 30.9223 37.0076 31.169 36.6893 31.6727C36.7201 31.6624 36.7612 31.6624 36.792 31.6624C37.5518 31.6624 37.8084 32.7006 37.7982 33.7696C37.7982 33.9444 37.7879 34.1191 37.7674 34.2938H37.8187V34.2938Z" />
    <path d="M23.8354 29.6271C24.1537 29.7813 24.5439 29.6065 24.9546 29.6579C24.8724 29.4832 24.7903 29.3496 24.8416 29.1029C24.9443 28.6095 24.5439 28.4759 24.3591 28.4964C23.897 28.517 23.6301 28.63 23.1475 28.4964C23.4863 28.8048 23.3939 29.4112 23.8354 29.6271Z" />
    <path d="M19.82 33.3686C19.9843 31.9501 19.7584 31.8371 19.3477 31.4979C18.9884 31.1998 18.4031 31.1073 17.8179 30.7064C17.3969 30.4186 17.284 29.9971 16.7604 29.4318C16.863 28.2394 17.7152 26.7695 18.3518 26.4406C18.4442 26.3892 18.4134 24.539 18.4134 24.539C18.4134 24.539 18.8344 24.5184 18.7933 24.4979C18.2286 24.1484 17.551 24.4156 17.0581 24.9913C16.5756 25.3819 15.4872 26.1117 14.7377 26.3686C13.7212 25.5052 12.1298 24.7548 10.9593 23.583C10.9593 23.583 12.4994 23.5625 13.2079 23.2747C13.3927 23.1616 13.8855 22.3701 13.6904 21.6197C13.4543 21.5375 13.1052 21.3525 12.7664 21.1675C12.3454 20.9208 11.9347 20.6638 11.7499 20.5199C11.0825 20.0162 10.8156 19.5742 9.65538 19.2864C9.72725 18.7519 9.84019 18.8753 10.3536 18.536C11.0004 18.094 11.3598 17.5698 11.6267 17.0559C11.8321 16.6447 11.5959 15.8121 11.0723 16.8708C10.8875 17.2512 10.3844 17.7446 9.81966 17.8987C9.86073 17.5698 9.88126 17.3745 9.88126 17.1998C11.5754 16.0074 11.4111 14.9487 11.2776 13.9619C11.2057 13.3863 10.6308 13.1499 10.6616 13.746C10.6718 14.1366 11.0209 15.257 9.87099 15.9149C9.85046 15.4215 9.70672 15.1954 9.60404 14.9384C10.6308 13.5816 10.1995 12.2659 9.76832 11.6697C9.4911 11.2894 8.81346 11.1557 9.12148 11.7622C9.36789 12.2556 9.77859 13.6021 9.0188 14.1469C8.75185 13.818 8.4541 13.6946 8.35143 13.2526C8.4233 11.7725 8.33089 10.8782 8.14608 10.354C7.96127 9.87085 7.49924 9.56248 7.53004 10.282C7.57111 11.1043 7.64298 12.1322 7.56084 12.2042C7.48897 12.2659 6.40063 11.2482 5.94887 10.9501C5.49711 10.6418 4.97347 10.7548 5.49711 11.3613C5.95914 11.8958 7.34523 12.9237 7.17068 13.2629C7.05774 13.4685 6.06181 12.6462 5.54844 12.4714C5.02481 12.2864 4.86053 12.5742 5.30203 12.934C6.01047 13.5199 6.48277 13.9002 7.65325 14.2908C8.81346 14.6814 9.3987 16.2952 9.02907 18.608C9.0188 18.7211 8.81346 18.7005 8.70052 18.6594C8.64918 17.7754 8.49517 16.7167 8.27956 16.2541C8.00234 15.6476 7.45817 15.6374 7.65325 16.4597C7.80726 17.1073 7.89966 17.8165 7.78672 18.7005C6.82159 18.536 6.45197 18.2791 6.05154 18.0324C6.01047 17.5904 6.23636 16.8503 6.27743 16.1924C6.33903 15.5449 5.95914 15.1337 5.74352 15.956C5.53818 16.7372 5.39443 17.1175 5.27123 17.6726C4.99401 17.5801 4.70652 17.4567 4.57305 17.3026C4.51144 17.2306 4.57305 16.3466 4.50118 15.7196C4.43957 15.0001 4.16235 15.0206 3.94674 15.6579C3.84407 15.9457 3.7722 16.3363 3.74139 16.8092C3.40257 16.6036 3.16642 16.2027 3.13562 15.8943C3.18696 15.144 3.31017 14.3422 3.40257 13.8488C3.46418 13.4891 3.22803 12.7695 2.94054 13.6432C2.73519 14.2703 2.68386 14.7945 2.56065 15.2365C2.31423 15.2159 1.99595 13.7871 1.8214 12.8826C1.74953 12.4612 1.40044 11.9883 1.33884 12.9134C1.26697 13.9311 1.48258 14.959 1.729 15.4215C1.23616 15.3701 0.763867 14.4758 0.425045 13.9619C0.117024 13.4993 -0.0267182 13.9824 0.00408382 14.1675C0.291569 15.9869 1.73926 16.6344 2.39637 16.7578C3.41284 18.2174 5.35337 18.8444 6.98587 19.5537C4.85027 19.5331 4.29583 20.3863 3.32043 19.8312C3.3615 20.633 3.76193 21.0133 4.14182 21.1983C4.41904 21.3217 4.68599 21.3628 4.8092 21.3833C4.98374 22.3598 5.91807 22.3084 6.69839 22.3598C6.49304 24.2614 6.72919 26.7798 8.40276 28.6609C8.35143 29.6271 8.28982 30.9017 8.30009 31.7343C6.93454 33.0089 5.71272 35.6711 5.23016 37.1513C4.8708 38.2512 4.32663 39.1146 3.49498 39.5155C4.18289 40.2453 5.18909 39.8855 5.77433 39.4744C5.8154 40.1219 5.96941 40.5845 6.07208 40.9648C5.68192 41.5507 5.41497 41.9516 5.45604 42.6711C5.01454 42.7945 4.70652 43.0617 4.47037 43.3701C4.31636 43.5551 4.49091 44.4391 4.66545 44.8092C5.20962 46.0324 4.78866 48.7871 4.68599 49.6094C4.91187 49.6197 5.33283 49.6403 5.42524 49.3011C5.55871 49.4244 5.89753 49.6608 6.05154 50.1954C6.01047 50.3907 5.877 51.2335 6.31849 51.3466C6.67785 51.4391 8.20768 51.3877 8.41303 51.1205C8.25902 50.9354 7.99207 50.5346 7.82779 50.1337C7.82779 49.7122 7.78672 49.2086 7.67378 48.9824C7.49924 48.6741 7.05774 47.9648 6.77026 47.6873C6.70865 47.1836 6.65732 44.9325 6.89347 44.0691C7.29389 43.7915 9.9942 41.7769 10.5589 39.8547C11.0517 40.0191 10.8977 41.3657 10.8977 43.1028C10.8977 43.5654 11.4624 43.8018 11.8013 43.8532C12.5302 43.9457 13.5775 44.6344 14.7377 46.3716C14.9636 46.1351 15.2613 45.8987 15.2613 45.8987C15.4154 46.1043 15.5899 46.608 15.6926 46.9163C15.8158 47.1528 16.7604 47.2967 17.4791 47.0705C17.7152 46.9883 17.859 46.9472 18.013 46.6902C17.0992 45.0867 16.5448 44.028 15.3743 43.144C14.8301 42.7328 14.1011 42.5272 13.4954 42.1366C13.9061 41.376 15.0252 37.7989 14.3476 36.4832C14.1217 36.0515 13.2695 35.6197 12.2325 35.815C13.0949 34.7666 14.8507 32.7108 15.0868 32.0838C15.2921 32.3305 16.3291 32.1557 17.0992 32.4641C17.3764 32.5772 18.167 33.5948 18.2081 33.9545C18.2799 34.5816 18.3107 35.3422 17.8692 37.0691C18.1773 37.0177 18.1362 36.9971 18.434 36.8738C18.4853 37.3363 18.3415 37.6961 17.9411 38.3951C18.0438 39.0221 18.321 39.978 18.6188 40.163C19.0089 39.0015 20.4566 37.3363 20.4155 36.3701C20.3642 35.0544 19.7482 33.9443 19.82 33.3686Z" />
    <path d="M78.7332 32.125C78.7332 32.125 78.3122 32.3819 77.4293 32.3819C76.2896 32.3819 75.2731 31.7035 74.7289 31.3438C74.0308 30.8812 72.8911 30.2233 71.7514 29.8636C69.5542 29.8636 68.1168 29.2468 66.9976 27.7872C65.8785 26.3482 65.3035 24.4877 65.3035 22.3394C65.3035 19.1734 66.5048 16.6037 68.6199 15.4627C69.4823 15.0002 70.5604 14.7432 71.659 14.7432C75.5606 14.7432 77.9734 17.6007 77.9734 22.2057C77.9734 25.4025 76.8338 27.7872 75.078 28.9487C75.4785 29.1029 76.0534 29.4833 76.3923 29.6888C76.9159 30.0075 77.5525 30.3056 78.2096 30.3056C78.8461 30.3056 79.5135 30.2028 79.5135 30.2028L78.7332 32.125ZM74.195 18.8959C73.9589 18.1558 73.1786 17.0354 71.6179 17.0354C70.622 17.0354 69.7596 17.5391 69.3386 18.3305C68.8355 19.2865 68.5993 20.5714 68.5993 22.3496C68.5993 24.8885 69.0203 26.4715 69.9033 27.1088C70.3756 27.448 70.9608 27.6125 71.659 27.6125C73.7022 27.6125 74.5749 26.0501 74.5749 22.3085C74.5749 20.7975 74.4517 19.7182 74.195 18.8959Z" />
    <path d="M87.2982 29.9252C86.9389 29.6682 86.6411 29.3085 86.4563 28.8665C85.7581 29.5449 84.7417 29.9047 83.602 29.9047C82.0824 29.9047 80.7682 29.1851 80.4191 28.147C80.2548 27.6536 80.183 27.0882 80.183 25.9884V19.05L82.9654 18.5258V25.4847C82.9654 26.4509 83.0578 26.9649 83.2016 27.263C83.3556 27.5611 83.7663 27.7666 84.1975 27.7666C84.8957 27.7666 85.7376 27.263 85.9532 26.7285V19.1117L88.6535 18.5464V26.8107C88.6535 27.5302 88.8897 28.2703 89.3106 28.774L87.2982 29.9252Z" />
    <path d="M94.0225 25.1044V25.1969C94.0225 26.8621 94.8439 27.818 96.3018 27.818C97.2772 27.818 98.1807 27.4583 99.0535 26.7387L100.152 28.4348C98.9097 29.4421 97.5955 29.9355 96.0759 29.9355C92.9752 29.9355 90.9628 27.7358 90.9628 24.3334C90.9628 22.3907 91.3632 21.0956 92.3181 20.0368C93.2011 19.0398 94.2792 18.5772 95.7166 18.5772C96.9589 18.5772 98.1499 18.9986 98.8379 19.7182C99.8338 20.7358 100.275 22.1954 100.275 24.4568V25.1147H94.0225V25.1044ZM97.3388 22.9047C97.3388 22.1029 97.2567 21.6815 97 21.2806C96.7228 20.8591 96.3224 20.6433 95.7577 20.6433C94.6796 20.6433 94.0635 21.4862 94.0635 22.9869V23.028H97.3388V22.9047Z" />
    <path d="M104.7 25.1044V25.1969C104.7 26.8621 105.522 27.818 106.98 27.818C107.945 27.818 108.859 27.4583 109.721 26.7387L110.82 28.4348C109.577 29.4421 108.263 29.9355 106.744 29.9355C103.643 29.9355 101.63 27.7358 101.63 24.3334C101.63 22.3907 102.031 21.0956 102.986 20.0368C103.879 19.0398 104.947 18.5772 106.384 18.5772C107.626 18.5772 108.818 18.9986 109.505 19.7182C110.501 20.7358 110.943 22.1954 110.943 24.4568V25.1147H104.7V25.1044ZM108.017 22.9047C108.017 22.1029 107.935 21.6815 107.678 21.2806C107.401 20.8591 107 20.6433 106.435 20.6433C105.357 20.6433 104.741 21.4862 104.741 22.9869V23.028H108.017V22.9047Z" />
    <path d="M118.695 29.6271V22.586C118.695 21.3628 118.48 21.0031 117.741 21.0031C117.176 21.0031 116.437 21.3834 115.78 21.9796V29.6271H112.946V21.7843C112.946 20.8489 112.823 19.9649 112.566 19.2453L115.081 18.5258C115.338 18.9781 115.482 19.4406 115.482 19.8826C115.903 19.5846 116.262 19.3379 116.724 19.0809C117.299 18.7828 118.038 18.6183 118.675 18.6183C119.876 18.6183 120.934 19.2556 121.273 20.1807C121.416 20.5816 121.488 21.0545 121.488 21.7226V29.6271H118.695V29.6271Z" />
    <path d="M127.637 29.9664C126.302 29.9664 124.844 29.5449 123.263 28.7226L124.279 26.6463C125.142 27.1808 126.641 27.8695 127.873 27.8695C128.674 27.8695 129.31 27.335 129.31 26.6463C129.31 25.9062 128.787 25.5259 127.647 25.3203L126.374 25.0839C125.655 24.9605 124.772 24.4466 124.392 23.984C124.012 23.5215 123.776 22.7403 123.776 22.031C123.776 19.9238 125.45 18.5053 127.955 18.5053C129.69 18.5053 130.83 19.0295 131.816 19.5229L130.892 21.4245C129.813 20.8695 129.033 20.6433 128.232 20.6433C127.411 20.6433 126.857 21.0648 126.857 21.7021C126.857 22.2571 127.216 22.545 128.212 22.8019L129.516 23.1411C130.85 23.4803 131.292 23.8812 131.672 24.3643C132.072 24.868 132.267 25.4847 132.267 26.2043C132.267 28.4451 130.409 29.9664 127.637 29.9664Z" />
    <path d="M137.022 29.8842C135.82 29.8842 134.845 29.3189 134.506 28.404C134.291 27.849 134.25 27.52 134.25 25.9679V17.8886C134.25 16.4701 134.209 15.5964 134.106 14.6302L137.001 13.9723C137.104 14.5582 137.145 15.2572 137.145 16.7888V25.2278C137.145 27.0883 137.166 27.3453 137.33 27.6331C137.432 27.8181 137.669 27.9312 137.894 27.9312C137.997 27.9312 138.069 27.9312 138.213 27.8901L138.695 29.5861C138.233 29.7814 137.638 29.8842 137.022 29.8842Z" />
    <path d="M147.414 30.1822C146.757 29.9047 146.171 29.4216 145.894 28.8665C145.689 29.0824 145.453 29.288 145.247 29.4319C144.713 29.8122 143.954 30.0281 143.071 30.0281C140.658 30.0281 139.354 28.8049 139.354 26.6463C139.354 24.1074 141.11 22.9253 144.549 22.9253C144.765 22.9253 144.95 22.9253 145.186 22.9458V22.5038C145.186 21.3012 144.95 20.9003 143.923 20.9003C143.009 20.9003 141.962 21.3423 140.791 22.1235L139.59 20.0883C140.165 19.7285 140.586 19.5229 141.346 19.194C142.403 18.752 143.307 18.5567 144.303 18.5567C146.12 18.5567 147.362 19.2351 147.783 20.4378C147.927 20.8798 147.999 21.219 147.968 22.3805L147.907 26.0193C147.886 27.2013 147.968 27.7153 148.923 28.4348L147.414 30.1822ZM145.001 24.8988C143.04 24.8988 142.362 25.2586 142.362 26.5435C142.362 27.3864 142.886 27.962 143.605 27.962C144.128 27.962 144.662 27.6844 145.083 27.2219L145.124 24.8988H145.001V24.8988Z" />
    <path d="M156.632 29.6271V22.586C156.632 21.3628 156.416 21.0031 155.677 21.0031C155.102 21.0031 154.363 21.3834 153.716 21.9796V29.6271H150.882V21.7843C150.882 20.8489 150.759 19.9649 150.502 19.2453L153.018 18.5258C153.274 18.9781 153.418 19.4406 153.418 19.8826C153.839 19.5846 154.198 19.3379 154.66 19.0809C155.225 18.7828 155.975 18.6183 156.611 18.6183C157.812 18.6183 158.87 19.2556 159.209 20.1807C159.353 20.5816 159.424 21.0545 159.424 21.7226V29.6271H156.632V29.6271Z" />
    <path d="M168.871 29.6271C168.789 29.4626 168.748 29.2879 168.707 28.9898C168.008 29.6065 167.187 29.8943 166.212 29.8943C163.47 29.8943 161.735 27.7563 161.735 24.3951C161.735 21.0133 163.614 18.6902 166.355 18.6902C167.136 18.6902 167.752 18.8855 168.275 19.307C168.234 19.0706 168.193 18.3305 168.193 17.7035V13.9825L171.007 14.4245V25.6697C171.007 28.3319 171.222 29.2057 171.407 29.6271H168.871V29.6271ZM168.234 21.6609C167.711 21.1983 167.197 20.9619 166.694 20.9619C165.431 20.9619 164.877 22.0206 164.877 24.4259C164.877 26.749 165.359 27.5199 166.838 27.5199C167.362 27.5199 167.957 27.1601 168.234 26.8209V21.6609Z" />
    <path d="M71.9779 50.329C70.1606 50.329 68.6205 49.6917 67.5219 48.5097C66.3001 47.1837 65.7251 45.3848 65.7251 42.8871C65.7251 40.122 66.4644 38.1484 67.9634 36.8019C69.0004 35.8665 70.2428 35.4245 71.7418 35.4245C73.2819 35.4245 74.6166 35.9076 75.7152 36.8636L74.9349 37.9429C73.7542 37.1411 72.9123 36.8224 71.7931 36.8224C70.099 36.8224 68.7745 37.6036 68.179 39.2688C67.7991 40.3481 67.6143 41.5713 67.6143 42.9487C67.6143 44.8503 67.9737 46.3922 68.6308 47.3481C69.2879 48.3041 70.7664 48.89 72.1319 48.89C73.0457 48.89 73.8261 48.705 74.4318 48.3246V43.9047H71.5159L71.1771 42.4656H76.0541V49.2292C75.0171 49.9076 73.4564 50.329 71.9779 50.329Z" />
    <path d="M83.4367 50.3703C80.5413 50.3703 78.8986 48.2425 78.8986 44.7682C78.8986 41.3453 80.6132 39.2484 83.3751 39.2484C85.1308 39.2484 86.2705 40.0501 86.9892 41.0883C87.6463 42.0443 87.9544 43.288 87.9544 45.0046C87.9544 48.5098 86.0754 50.3703 83.4367 50.3703ZM85.5929 41.9518C85.1514 41.0164 84.217 40.5949 83.3546 40.5949C82.4203 40.5949 81.5578 41.0369 81.1984 41.7359C80.8596 42.3938 80.6953 43.2366 80.6953 44.4804C80.6953 45.9606 80.952 47.2763 81.3525 47.9239C81.7324 48.5611 82.5743 48.9826 83.4881 48.9826C84.5867 48.9826 85.4081 48.4172 85.7674 47.3996C86.0036 46.7418 86.0857 46.1559 86.0857 45.1177C86.0754 43.6478 85.9317 42.6507 85.5929 41.9518Z" />
    <path d="M94.5136 50.2057H92.8914L89.113 39.6595L90.8071 39.2997L93.261 46.5567C93.5587 47.4201 93.7641 48.3555 93.7641 48.3555H93.8051C93.8051 48.3555 93.9694 47.5332 94.3082 46.5773L96.7211 39.5773H98.4768L94.5136 50.2057Z" />
    <path d="M101.723 45.1073V45.3643C101.723 46.3613 101.846 47.122 102.216 47.6668C102.801 48.5713 103.776 48.9619 104.834 48.9619C105.85 48.9619 106.672 48.6433 107.411 47.9649L108.048 49.0236C107.113 49.8665 105.85 50.329 104.495 50.329C101.579 50.329 99.8337 48.2218 99.8337 44.727C99.8337 42.9487 100.214 41.8077 101.097 40.749C101.939 39.752 102.976 39.2894 104.238 39.2894C105.378 39.2894 106.374 39.6903 107.093 40.4304C107.996 41.3555 108.294 42.3525 108.294 44.8709V45.1073H101.723ZM106.056 41.5097C105.696 40.9443 104.957 40.5845 104.156 40.5845C102.657 40.5845 101.815 41.6844 101.723 43.8636H106.538C106.518 42.7226 106.374 42.0236 106.056 41.5097Z" />
    <path d="M115.717 41.1499C115.614 41.1088 115.419 41.0677 115.255 41.0677C114.618 41.0677 113.992 41.3349 113.499 41.8283C113.017 42.3115 112.893 42.6301 112.893 43.5038V50.1029H111.251V41.9825C111.251 40.4407 110.891 39.7417 110.891 39.7417L112.534 39.2997C112.534 39.2997 112.935 40.122 112.873 41.0163C113.633 39.937 114.752 39.2586 115.83 39.2586C116.107 39.2586 116.395 39.3614 116.395 39.3614L115.717 41.1499Z" />
    <path d="M124.034 50.0926V42.9692C124.034 41.8488 123.952 41.5713 123.654 41.2115C123.418 40.9443 122.976 40.7695 122.494 40.7695C121.652 40.7695 120.337 41.4479 119.578 42.2497V50.0926H117.976V41.9722C117.976 40.4714 117.576 39.7519 117.576 39.7519L119.177 39.3099C119.177 39.3099 119.557 40.0911 119.557 40.9545C120.656 39.8547 121.754 39.3305 122.874 39.3305C124.013 39.3305 125.03 39.9472 125.451 40.8723C125.615 41.2526 125.707 41.6741 125.707 42.0955V50.0926H124.034V50.0926Z" />
    <path d="M140.41 50.0926V42.3114C140.41 41.2938 139.948 40.7696 139.055 40.7696C138.1 40.7696 137.36 41.3863 136.262 42.3937V50.0926H134.599V42.6095C134.599 41.9722 134.537 41.5508 134.301 41.2527C134.044 40.9546 133.705 40.8312 133.223 40.8312C132.422 40.8312 131.642 41.2321 130.543 42.2292V50.0926H128.962V41.9311C128.962 40.4098 128.582 39.6903 128.582 39.6903L130.184 39.31C130.184 39.31 130.564 40.1323 130.564 40.8724C131.262 40.0912 132.545 39.2894 133.623 39.2894C134.66 39.2894 135.697 39.9267 136.077 41.0471C137.094 39.9678 138.377 39.2894 139.455 39.2894C141.016 39.2894 142.094 40.4715 142.094 42.147V50.0926H140.41V50.0926Z" />
    <path d="M146.631 45.1073V45.3643C146.631 46.3613 146.755 47.122 147.114 47.6668C147.71 48.5713 148.675 48.9619 149.732 48.9619C150.749 48.9619 151.57 48.6433 152.309 47.9649L152.946 49.0236C152.022 49.8665 150.749 50.329 149.393 50.329C146.477 50.329 144.732 48.2218 144.732 44.727C144.732 42.9487 145.112 41.8077 145.995 40.749C146.837 39.752 147.874 39.2894 149.147 39.2894C150.287 39.2894 151.283 39.6903 152.001 40.4304C152.905 41.3555 153.203 42.3525 153.203 44.8709V45.1073H146.631ZM150.954 41.5097C150.595 40.9443 149.855 40.5845 149.055 40.5845C147.556 40.5845 146.714 41.6844 146.621 43.8636H151.437C151.426 42.7226 151.272 42.0236 150.954 41.5097Z" />
    <path d="M162.206 50.0926V42.9692C162.206 41.8488 162.124 41.5713 161.827 41.2115C161.59 40.9443 161.149 40.7695 160.666 40.7695C159.824 40.7695 158.51 41.4479 157.75 42.2497V50.0926H156.149V41.9722C156.149 40.4714 155.748 39.7519 155.748 39.7519L157.35 39.3099C157.35 39.3099 157.73 40.0911 157.73 40.9545C158.828 39.8547 159.927 39.3305 161.046 39.3305C162.186 39.3305 163.202 39.9472 163.623 40.8723C163.788 41.2526 163.88 41.6741 163.88 42.0955V50.0926H162.206V50.0926Z" />
    <path d="M170.967 40.8106H168.77V47.5948C168.77 48.7563 169.088 49.1572 170.125 49.1572C170.587 49.1572 170.864 49.0955 171.162 48.9413L171.398 50C170.874 50.2776 170.279 50.4215 169.54 50.4215C168.985 50.4215 168.564 50.3187 168.164 50.1234C167.425 49.7636 167.147 49.0852 167.147 48.0265V40.8003H165.772V39.5566H167.147C167.147 38.539 167.312 36.8943 167.312 36.8943L169.037 36.514C169.037 36.514 168.831 38.1586 168.831 39.5566H171.47L170.967 40.8106Z" />
</svg>`;var X=`{{> header header}}
{{> navbar navbar}}
{{> globalAlert globalAlert}}
<main>
  {{#> breadcrumbsWrapper}}
    {{> breadcrumbs breadcrumbs}}
  {{/breadcrumbsWrapper}}
  <!-- Main content-->
  <div class="container-fluid">
    <div class="container qld-content">
      <div class="row">
        <!-- Side Nav -->
        {{#> sidenavWrapper}}
          {{> sidenav sidenav}}
        {{/sidenavWrapper}}
        {{#> contentWrapper}}
        {{> @partial-block }}
        {{/contentWrapper}}
      </div> <!-- end row -->
    </div>

    {{#>contentFooterWrapper}}
      {{> contentFooter contentFooter }}
    {{/contentFooterWrapper}}

  </div>
</main>
{{> footer footer}}`;var K=`<!-- DCTERMS https://www.dublincore.org/specifications/dublin-core/dcmi-terms/-->
{{#if dcTerms}}
<link rel="schema.DCTERMS" href="http://purl.org/dc/terms/" />
<link rel="schema.AGLSTERMS" href="https://agls.gov.au/documents/aglsterms/" />
<meta name="DCTERMS.title" content="{{ title }}">
<meta name="DCTERMS.publisher" scheme="AGLSTERMS.AglsAgent" content="{{#if dcTerms.publisher}}{{dcTerms.publisher}}{{else}}corporateName=The State of Queensland; jurisdiction=Queensland{{/if}}" />
<meta name="DCTERMS.creator" scheme="AGLSTERMS.GOLD" content="{{#if dcTerms.creator}}{{dcTerms.creator}}{{else}}c=AU; o=The State of Queensland;{{/if}}">
{{#if dcTerms.created}}<meta name="DCTERMS.created" content="{{ dcTerms.created }}">{{/if}}
{{#if dcTerms.modified}}<meta name="DCTERMS.modified" content="{{ dcTerms.modified }}">{{/if}}
{{#if description}}<meta name="DCTERMS.description" content="{{ description }}">{{/if}}
{{#if uri}}<meta name="DCTERMS.identifier" scheme="DCTERMS.URI" content="{{ uri }}">{{/if}}
<meta name="DCTERMS.jurisdiction" scheme="AGLSTERMS.AglsJuri" content="{{#if dcTerms.jurisdiction}}{{dcTerms.jurisdiction}}{{else}}Queensland{{/if}}">
{{#if dcTerms.type}}<meta name="DCTERMS.type" scheme="DCTERMS.DCMIType" content="{{ dcTerms.type }}" />{{/if}}
{{#if dcTerms.aggregationLevel}}<meta name="AGLSTERMS.aggregationLevel" content="{{ dcTerms.aggregationLevel }}"/>{{/if}}
{{#if dcTerms.documentType}}<meta name="AGLSTERMS.documentType" scheme="AGLSTERMS.agls-document" content="{{ dcTerms.documentType }}" />{{/if}}
{{#if dcTerms.subject}}<meta name="DCTERMS.subject" content="{{ dcTerms.subject }}" />{{/if}}
{{#if dcTerms.audience}}<meta name="DCTERMS.audience" content="all" scheme="{{ dcTerms.audience }}" />{{/if}}
{{#if dcTerms.licenseUri}}<meta name="DCTERMS.license" scheme="DCTERMS.URI" content="{{ dcTerms.licenseUri }}">{{/if}}
{{/if}}`;var e1=`
<!-- SEO (required) -->
{{#if description }}<meta name="description" content="{{ description }}" />{{/if}}
{{#if seo.pageSnippet }}<meta name="page.snippet" content="{{ seo.pageSnippet}}" />{{/if}}

<!-- SEO -->
{{#if seo.keywords }}<meta name="keywords" content="{{ seo.keywords }}" />{{/if}}
{{#if seo.department }}<meta name="department" content="{{ seo.department }}" />{{/if}}

<!-- Open Graph protocol https://ogp.me/ basics -->
<meta property="og:title" content="{{ title }}" />
<meta name="twitter:title" content="{{ title }}" />
{{#if description }}<meta property="og:description" content="{{ description }}" />{{/if}}
{{#ifAny og.twitter_description description }}<meta name="twitter:description" content="{{#if og.twitter_description }}{{ og.twitter_description }}{{else}}{{ description }}{{/if}}" />{{/ifAny}}
{{#if og.image }}<meta property="og:image" content="{{ og.image }}">{{/if}}
{{#ifAny og.twitter_image og.image }}<meta name="twitter:image:src" content="{{#if og.twitter_image }}{{ og.twitter_image }}{{else}}{{ og.image }}{{/if}}" />{{/ifAny}}
{{#if uri }}<meta property="og:url" content="{{ uri }}" />{{/if}}
{{#if og.type }}<meta property="og:type" content="{{og.type}}" />{{/if}}`;var i1=`<!-- Example button to trigger the modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#{{modalID}}">
  {{launchButtonLabel}}
</button>

<!-- You can also use a standard link. It must contain data-bs-toggle and data-bs-target attributes -->
<p>You can also <a class="d-inline-block my-3" href="#" data-bs-toggle="modal" data-bs-target="#{{modalID}}">open a model</a> with a standard link.


<!-- QGDS Modal -->
<div class="modal fade" id="{{modalID}}" tabindex="-1" aria-labelledby="{{modalLabel}}" aria-hidden="true">
  <div class="modal-dialog {{modalSize}}">
    <div class="modal-content">

      {{#if header}}
      <div class="modal-header">
        <h1 class="modal-title" id="{{modalLabel}}">{{{ header.title }}}</h1>
        {{#if header.closeButton}}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        {{/if}}
      </div>
      {{/if}}
      
      <div class="modal-body">
        {{{ content }}}
      </div>
    
      {{#if footer}}
      <div class="modal-footer">
        {{#each footer.buttons}}
            {{{ . }}}
        {{/each}}
      </div>
      {{/if}}
    
    </div>
  </div>
</div>`;var a1=`<!-- QGDS Partial: Primary navigation -->

<nav id="main-nav" class="navbar navbar-expand-lg{{#if metadata.alternativeColor}} dark{{/if}}{{#if metadata.verticalOrientation}} vertical{{/if}}" aria-label="Website navigation" role="navigation">
    <div id="navbarNav" class="container">
            <div class="nav-header">
                <span class="navbar-brand" href="#">{{#if metadata.navbarBrandName}}{{metadata.navbarBrandName}}{{/if}}</span>
                <button id="burgerCloseBtn" type="button" class="navbar-btn" data-bs-toggle="collapse"
                    aria-label="Close" data-bs-target="#main-nav" aria-expanded="false"
                    aria-controls="collapseExample">Close</button>
            </div>
            <div class="navbar-collapse">
                <ul class="navbar-nav">
                    {{#each navigation}}
                        {{#if navigationItems}}
                            <li class="nav-item dropdown{{#if alternativeColor}} alt{{/if}}{{#if mobileOnly}} mobile-only{{/if}}"> 
                                <a class="nav-link{{#unless ../metadata.verticalOrientation}} dropdown-toggle{{/unless}}{{#if currentPage}} active{{/if}}{{#if dropdownOptions.hasNoLink}} hasNoLink{{/if}}" {{#if currentPage}}aria-current="page"{{/if}}{{#if dropdownOptions.hasNoLink}} href="#"{{else}} href="{{url}}"{{/if}}{{#if target}} target="{{target}}"{{/if}}{{#ifCond target '==' '_blank'}} rel="noopener noreferrer"{{/ifCond}} role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                                {{#if iconName}}
                                    <span class="qld-icon qld-icon-md {{iconName}}" aria-hidden="true"></span>
                                    {{#if hideLabel}}
                                        <span class="visually-hidden-lg">{{text}}</span>
                                    {{else}}
                                        {{text}}
                                    {{/if}}
                                {{else}}
                                    {{text}}
                                {{/if}}
                                </a>
                                <button class="nav-link dropdown-toggle"{{#if currentPage}} aria-current="page"{{/if}}  data-bs-toggle="dropdown" aria-expanded="false" aria-selected="false" aria-label="Toggle navigation">                                
                                    <span class="visually-hidden">Expand</span>
                                </button>
                                <ul class="dropdown-menu">
                                    {{#unless dropdownOptions.hasNoLink}}
                                        <li>
                                            <a class="dropdown-item parent-link" role="button"{{#if currentPage}} aria-current="page"{{/if}}{{#if target}} target="{{target}}"{{/if}}{{#ifCond target '==' '_blank'}} rel="noopener noreferrer"{{/ifCond}}>{{#if dropdownOptions.alternativeText}}{{dropdownOptions.alternativeText}}{{else}}{{text}}{{/if}}</a>
                                            {{#if dropdownOptions.description}}
                                                <p>{{dropdownOptions.description}}</p>
                                            {{/if}}
                                        </li>
                                    {{/unless}}
                                    {{#each navigationItems}}
                                        <li{{#if mobileOnly}} class="mobile-only"{{/if}}>
                                            {{#if isHTML}}
                                                {{{htmlContent}}}
                                            {{/if}}
                                            {{#unless isHTML}}
                                                <a class="dropdown-item" href="{{url}}"{{#if target}} target="{{target}}"{{/if}}{{#ifCond target '==' '_blank'}} rel="noopener noreferrer"{{/ifCond}}>{{text}}</a>
                                                {{#if description}}
                                                    <p>{{description}}</p>
                                                {{/if}}
                                            {{/unless}}
                                        </li>
                                    {{/each}}
                                    {{#if dropdownOptions.viewAllHref}}
                                        <li>
                                            <a class="dropdown-item view-all" href="{{dropdownOptions.viewAllHref}}">View all</a>
                                        </li>
                                    {{/if}}
                                </ul>
                            </li>
                        {{else}}
                            <li class="nav-item{{#if alternativeColor}} alt{{/if}}{{#if mobileOnly}} mobile-only{{/if}}">
                                <a class="nav-link{{#if currentPage}} active{{/if}}"{{#if currentPage}} aria-current="page"{{/if}} href="{{url}}"{{#if target}}  target="{{target}}"{{/if}}{{#ifCond target '==' '_blank'}} rel="noopener noreferrer"{{/ifCond}}>
                                {{#if iconName}}
                                    <span class="qld-icon qld-icon-md {{iconName}}" aria-hidden="true"></span>
                                    {{#if hideLabel}}
                                        <span class="visually-hidden-lg">{{text}}</span>
                                    {{else}}
                                        {{text}}
                                    {{/if}}
                                {{else}}
                                    {{text}}
                                {{/if}}
                                </a>
                            </li>
                        {{/if}}
                    {{/each}}
                </ul>
            </div>
        </div>
        <div id="overlay"></div>
</nav>`;var t1=`{{!
Component Name: QGDS QOL Pagination
Component Version: 1.0
Framework: Bootstrap 5.3
Reference: https://getbootstrap.com/docs/5.0/components/pagination/
}}

<nav aria-label="{{ arialabel }}">

    <ul class="pagination">

        {{#if previous }}
        <li class="page-item previous">
            <a class="page-link" href="{{previous.href}}" aria-label="{{previous.arialabel}}">
                <span>{{ previous.linktext }}</span>
            </a>
        </li>
        {{/if}}

        {{#each pages}}
        <li class="page-item {{customClasses}}">
            {{#if more}}
            {{! More button }}
            <span></span>
            {{else}}
            {{! Page button }}
            <a class="page-link" href="{{href}}" aria-label="{{arialabel}}">{{ linktext }}</a>
            {{/if}}
        </li>

        {{/each }}

        {{#if next }}
        <li class="page-item next">
            <a class="page-link" href="{{next.href}}" aria-label="{{next.arialabel}}">
                <span>{{ next.linktext }}</span>
            </a>
        </li>
        {{/if}}

    </ul>

</nav>`;var C1=`<section class="qld-promo-panel {{#ifCond type '==' 'indent-text'}}indent{{/ifCond}} {{#ifCond type '==' 'indent-img'}}indent{{/ifCond}} {{type}}">
    <div class="row {{#ifCond type '==' 'promo'}}bg-img{{else}}{{variantClass}}{{/ifCond}} {{contentAlignment}}" 
        {{#ifCond type '==' 'promo'}}
            style="background-image: url({{promoImage}});"
        {{/ifCond}}>
        <div class="image-panel">
            {{#ifCond type '!=' 'promo'}}
            <img class="promo-panel-image" src="{{promoImage}}" alt="Promotional Image">
            {{else}}
                <div class="promo-panel-image"></div>
            {{/ifCond}}
        </div>
        <div class="content-panel {{variantClass}}">      
            {{#if icon}}
                <div class="icon-container">
                    <div class="icon-body">
                        <i class="qld-icon {{icon}}"></i>
                    </div>
                </div>
            {{/if}}
            <div class="main">
                {{#if title}}
                    <h2>{{~{title}~}}</h2>
                {{/if}}
                {{#if abstract}}
                    <div class="promo-abstract">
                        {{~{abstract}~}}
                    </div>
                {{/if}}
                {{#if body}}
                    {{~{body}~}}
                {{/if}}
            </div>
            {{#if cta.items}}
                <div class="cta-container">                            
                    {{#each cta.items}}                        
                        {{> callToAction label=value href=url target=target class=class arialabel=value id=id}}                        
                    {{/each}}                            
                </div>
            {{/if}}
            {{#if btn.items}}
                <div class="btn-container">
                    {{#each btn.items}}
                        {{> button islink=islink variantClass=variantClass label=label href=href target=target dataatts="data-type='class'"}}
                    {{/each}}
                </div>
            {{/if}}
        </div>
    </div>
</section>`;var s1=`<!-- QGDS Component: Loading Quick exit -->

<div class="qld-quick-exit"><!-- dark -->
  <div class="container">
    <div class="qld-quick-exit-inner container-fluid {{#if hasIconInfo}} has-icon-info{{/if}}{{#if hasTooltip}} has-tooltip{{/if}}">
      <div class="qg-quick-exit__tips">
        {{#if hasIconInfo}}
          <span class="icon-info"></span>
        {{/if}}
        <p class="qld-quick-exit-tip-title">{{{exitMessage}}}</p>
        <a href="{{browseSafelyOnlineURL}}" class="qld-quick-exit-tip-link">
          <span>{{exitMessageLinkText}}</span>
        </a>
      </div>
      <div class="qld-quick-exit-actions">
        {{#if hasTooltip}}
          <ul class="qld-quick-exit-list">
            <li class="qld-quick-exit-item qld-tooltip-container">
              <input type="checkbox" id="qld-quick-exit-input" class="qld-quick-exit-input sr-only" />
              <label for="qld-quick-exit-input" class="qld-quick-exit-label qld-tooltip-parent">
                <span class="qld-tooltip-prompt">{{qldTooltipPrompt}}</span>
                <div class="qld-tooltip-wrapper">
                  <div class="qld-tooltip">
                    <span class="qld-tooltip-content">{{qldTooltipContent}}</span>
                  </div>
                </div>
              </label>
            </li>
            
            <li class="qld-quick-exit-item">
              {{/if}}
                <button class="btn btn-secondary qld-quick-exit-button">{{{quickExitButtonText}}}</button>
              {{#if hasTooltip}}
            </li>   
          </ul>
        {{/if}}
      </div>
    </div>
  </div>
</div>`;var l1=`<!-- 
    QGDS Component: Search input 
-->
<div class="qld-search-input {{customClass}}">
    <input id="{{ inputID }}" name="{{ inputName }}" class="form-control" type="text" autocomplete="off"
        aria-label="{{ ariaLabel }}" {{#each tags}} data-{{@key}}="{{this}}" {{/each}} />
    <button class="btn btn-primary" type="{{ buttonType }}" id="{{ buttonID }}">
        <span class="btn-icon"></span>
        <span class="btn-label">{{ buttonLabel }}</span>
    </button>
    {{#if suggestions}}
    <div class="suggestions suggestions__group d-none">
        <div class="default-suggestions">
            <div class="suggestions-category mt-16">
                <strong class="suggestions-category-label d-block">Popular services</strong>
                <ul class="mt-2">
                    {{#each default_suggestions.popular_services}}
                    <li><a href="{{link}}">{{title}}</a></li>
                    {{/each}}
                </ul>
            </div>

            <div class="suggestions-category mt-16">
                <strong class="suggestions-category-label d-block">Browse by category</strong>
                <ul class="mt-12 mb-0">
                    {{#each default_suggestions.categories}}
                    <li><a href="{{link}}">{{title}}</a></li>
                    {{/each}}
                </ul>
            </div>

            {{#if default_suggestions.options.view_more}}
            <div class="suggestions-category">
                <a class="px-16 pt-12 pb-16 d-block suggestions-category-view-more"
                    href="{{default_suggestions.options.href}}">{{default_suggestions.options.label}}</a>
            </div>
            {{/if}}
        </div>
        <div class="dynamic-suggestions"></div>
    </div>
    {{/if}}
    
</div>`;var o1=`<!-- QGDS Component: Select -->

<!-- Label for the first input field -->
<label class="qld-text-input-label {{#if isRequired}}field-required{{/if}} {{#if isDisabled}}field-disabled{{/if}}" for="example-1">
    {{label-text}}
    {{#if optional-text}}
    <span class="label-text-optional">({{optional-text}})</span></label>
    {{/if}}

<!-- Hint text for the first input field -->
{{#if hint-text}}
<span class="qld-hint-text" id="example-1-hint">{{hint-text}}</span>
{{/if}}

{{#contains "qld-input-success" customClass}}
<span id="text-field-success" class="qld-input-success">
    {{successMessageText}}
</span>
{{/contains}}

{{#contains "qld-input-error" customClass}}
<span id="text-field-error" class="qld-input-error">
    {{errorMessageText}}
</span>
{{/contains}}

<!-- First text input field, described by the hint text above -->
<select class="qld-text-input form-select qld-select qld-field-width-1-quarter {{customClass}}"
    aria-label="Default select example" {{#if isDisabled}}disabled{{/if}} {{#if isRequired}}required aria-required="true"{{/if}}>
    <option selected>{{placeholder}}</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
`;var n1=`<nav class="qld-side-navigation" aria-label="Side Navigation">
  <button
    class="accordion-button collapsed d-lg-none"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#sideNavCollapse"
    aria-expanded="false"
    aria-controls="sideNavCollapse"
  >
    {{isdefined collapseTitle "In this section"}}
  </button>
  <div class="nav-wrapper collapse d-lg-block" id="sideNavCollapse">
    <h2 class="nav-title">
      {{#if navtitlelink}}
        <a class="nav-link" href="{{navtitlelink}}">{{navtitle}}</a>
      {{else}}
        {{navtitle}}
      {{/if}}
    </h2>

    <!-- Level One -->
    <ul class="nav" aria-label="section navigation">

      {{#each navlist}}
        <li class="nav-item {{class}}">

          {{#contains "active" class}}
            <span class="nav-link">{{label}}</span>
          {{else}}
            <a class="nav-link" href="{{link}}" target="{{target}}">
              {{label}}
              {{class}}
            </a>
          {{/contains}}

          {{#if children}}
            <!-- Level Two -->
            <ul>
              {{#each children}}
                <li class="nav-item {{class}}">

                  {{#contains "active" class}}
                    <span class="nav-link">{{label}}</span>
                  {{else}}
                    <a class="nav-link" href="{{link}}" target="{{target}}">
                      {{label}}
                      {{class}}
                    </a>
                  {{/contains}}

                  {{#if children}}
                    <!-- Level Three -->
                    <ul class="with-stalks">
                      {{#each children}}
                        <li class="nav-item {{class}}">

                          {{#contains "active" class}}
                            <span class="nav-link">{{label}}</span>
                          {{else}}
                            <a
                              class="nav-link"
                              href="{{link}}"
                              target="{{target}}"
                            >
                              {{label}}
                              {{class}}
                            </a>
                          {{/contains}}

                        </li>
                      {{/each}}
                    </ul>
                  {{/if}}

                </li>
              {{/each}}
            </ul>
          {{/if}}

        </li>
      {{/each}}
    </ul>
  </div>

</nav>`;var r1=`<!-- Side Nav -->
<div class="col-12 col-lg-3 pe-lg-0 order-last order-lg-first mt-5 mt-lg-0">
  {{> @partial-block }}
</div>
`;var d1=`<nav class="qld-skip-links" aria-label="skip to content links">
  {{#each skipLinks}}
    <a class="qld-skip-links__item" href="#{{targetId}}">{{label}}</a>
  {{/each}}
</nav>`;var c1=`<!-- QGDS Component: Loading Spinner -->

<div class="qld-spinner {{#if stacked}}align-center{{/if}}" role="status">
    <div class="spinner-border"></div>
    <span class="qld-spinner-label {{#if minimal}}sr-only{{/if}}">
        Loading...
    </span>
</div>
`;var p1=`<!-- QGDS Component: Table -->

<div class="table-responsive qld-table {{customClass}}">

    <table class="table {{variantClass}}">

        {{#if caption}}
        <caption class="caption">
            {{caption}}
            {{#if subcaption}}
            <span class="sub-caption">{{{ subcaption }}}</span>
            {{/if}}
        </caption>
        {{/if}}

        {{#if headers}}
        <thead>
            <tr>
                {{#each headers}}
                <th scope="col">{{this}}</th>
                {{/each}}
            </tr>
        </thead>
        {{/if}}

        <tbody>
            {{#rows}}
            <tr class="">
                {{#each cells}}
                <td>{{this}}</td>
                {{/each}}
            </tr>
            {{/rows}}
        </tbody>

        {{#if footer}}
        <tfoot>
            {{#each footer}}
            <tr class="">
                {{#each cells}}
                <td>{{this}}</td>
                {{/each}}
            </tr>
            {{/each}}
        </tfoot>
        {{/if}}

    </table>
</div>`;var f1=`
{{#ifCond type_variant '==' 'section-tabs'}}
    <section class="container tab-content pb-5 pt-5 mb-0 {{~#if tab_variant}} {{tab_variant}} {{else}} default{{/if~}}">
        <div class="row" style="padding-inline: 2.5rem;">
            <h2>{{sibiling_section_title}}</h2>
            {{{sibling_section_content}}}
        </div>
    </section>
{{/ifCond}}

<!-- QGDS Tabs -->    
<section class="qld-tabs {{~#if type_variant}} {{type_variant}}{{/if~}} {{~#if variant}} {{variant}}{{else}} default{{/if~}}">        
    <div class="tabs-area container">
        <ul class="nav nav-tabs {{#ifCond type_variant '==' 'section-tabs'}}{{~#if tab_variant}} {{tab_variant}} {{else}} default{{/if~}}{{/ifCond}}"  role="tablist">
            {{#each data.items }}
                <li class="nav-item" role="presentation">
                    <button class="nav-link {{#if @first}}active{{/if}}" id="{{toCamelCase this.tab_text}}-tab" data-bs-toggle="tab" data-bs-target="#{{toCamelCase this.tab_text}}-{{../unique_id}}-tab-pane" type="button" role="tab" aria-controls="#{{this.tab_text}}-tab-pane" aria-selected="{{#if @first}}true{{else}}false{{/if}}" {{#if this.disabled}}disabled{{/if}}>
                        <span>
                            {{#if this.icon}}
                                <i class="{{this.icon}}"></i>
                            {{/if}}{{~this.tab_text~}}
                        </span>
                    </button>
                </li>
            {{/each }}
        </ul>
        <button class="scroll scroll-left" aria-hidden="true" aria-label="Scroll tab buttons left" tabindex="-1">
            <i></i>
        </button>
        <button class="scroll scroll-right" aria-hidden="true" aria-label="Scroll tab buttons right" tabindex="-1">
            <i></i>
        </button>
    </div>
    <div class="tab-content container">
        {{#each data.items }}
            <section class="tab-pane fade {{#if @first}}show active{{/if}}" id="{{toCamelCase this.tab_text}}-{{../unique_id}}-tab-pane" role="tabpanel" aria-labelledby="{{this.tab_text}}-tab" tabindex="0">
                {{#ifCond ../type_variant '==' 'section-tabs'}}
                    <h2>{{this.title}}</h2>
                {{else}}
                    <h3>{{this.title}}</h3>
                {{/ifCond}}
                {{{this.content}}}
            </section>
        {{/each }}
    </div>
</section>`;var u1=`<!-- QGDS Component: Tag -->

<ul class="tag-list {{variant}} {{classes}}">
  {{#each tagItems}}
    <li class="tag-item {{classes}} {{../size}} {{../emphasis}}">
      {{{content}}}
      {{#if applied-filter}}
        <button class="tag-clear-filter-button" aria-label="Remove"></button>
      {{/if}}
    </li>
  {{/each }}
</ul>
`;var m1=`<!-- QGDS Component: Textarea -->

<!-- Label for the first input field -->
<label class="qld-text-input-label {{#if isRequired}}field-required{{/if}} {{#if isDisabled}}field-disabled{{/if}}"
    for="example-1">
    {{label-text}}
    {{#if optional-text}}
    <span class="label-text-optional">({{optional-text}})</span>
    {{/if}}
</label>

<!-- Hint text for the first input field -->
{{#if hint-text}}
<span class="qld-hint-text" id="example-1-hint">{{hint-text}}</span>
{{/if}}

{{#contains "qld-input-success" customClass}}
<span id="text-field-success" class="qld-input-success">
    {{successMessageText}}
</span>
{{/contains}}

{{#contains "qld-input-error" customClass}}
<span id="text-field-error" class="qld-input-error">
    {{errorMessageText}}
</span>
{{/contains}}

<!-- First text input field, described by the hint text above -->
<textarea id="example-1" class="qld-text-input form-control {{customClass}} {{#if isFilled}}form-style-filled{{/if}}"
    placeholder="{{placeholder}}" rows="{{rows}}" {{#if isDisabled}}disabled{{/if}} {{#if isRequired}}required
    aria-required="true" {{/if}}></textarea>`;var g1=`<!-- QGDS Component: Textbox -->

<!-- Label for the first input field -->
<label class="qld-text-input-label {{#if isRequired}}field-required{{/if}} {{#if isDisabled}}field-disabled{{/if}}"
    for="example-1">
    {{label-text}}
    {{#if optional-text}}
    <span class="label-text-optional">({{optional-text}})</span>
    {{/if}}
</label>

<!-- Hint text for the first input field -->
{{#if hint-text}}
<span class="qld-hint-text" id="example-1-hint">{{hint-text}}</span>
{{/if}}

{{#contains "qld-input-success" customClass}}
<span id="text-field-success" class="qld-input-success">
    {{successMessageText}}
</span>
{{/contains}}

{{#contains "qld-input-error" customClass}}
<span id="text-field-error" class="qld-input-error">
    {{errorMessageText}}
</span>
{{/contains}}

<!-- First text input field, described by the hint text above -->
<input id="example-1" class="qld-text-input form-control {{customClass}} {{#if isFilled}}form-style-filled{{/if}}"
    type="text" placeholder="{{placeholder}}" aria-label="Text input example" {{#if isDisabled}}disabled{{/if}} {{#if
    isRequired}}required aria-required="true" {{/if}} />`;var h1="<!-- QGDS Partial: typography -->";var v1=`<!-- QGDS Component: Video -->

{{#if analyticsTrackingCode}}
<script type="text/javascript" defer="defer" src="https://extend.vimeocdn.com/ga/{{analyticsTrackingCode}}.js">
<\/script>
{{/if}}

{{! By default, 'not-ready' class is added and will be removed by javascript event handler.
    When thumbnail attribute is empty / does not exist, 'empty-thumbnail' css class is added. }}
<section class="video not-ready {{#unless thumbnail}}empty-thumbnail{{/unless}} {{videoSize}}">
    <div class="video-description">
        {{{ description }}}
    </div>
    {{#if transcriptContent}}
        {{{ transcriptAccordion }}}
    {{/if}}
    <div class="video-player ratio ratio-{{aspectRatio}}">
        <a href="#" class="video-thumbnail video-controls" title="Play Video" 
            aria-label="Watch video {{#if duration}}- duration {{formatDuration duration "long"}}{{/if}}">
            <div class="video-thumbnail-image" style="--thumbnail:url({{thumbnail}})"></div>
            <div class="video-nav">
                <div class="video-watch">
                    <span class="icon"></span><span>Watch</span>
                </div>
                {{#if duration}}
                    <div title="Video duration" class="video-duration">
                        <span class="icon"></span><span>{{formatDuration duration}}</span>
                    </div>
                {{/if}}
            </div>
        </a>
        <div class="video-embed ratio ratio-{{aspectRatio}}">
            {{#ifCond source '===' 'vimeo'}}
                <iframe title="Vimeo video" class="embed-responsive-item video-vimeo" allow="autoplay; fullscreen" allowfullscreen muted="muted" src="https://player.vimeo.com/video/{{videoId}}?rel=0&autoplay={{urlParams.autoplay}}&background={{urlParams.background}}&controls={{urlParams.controls}}"></iframe>
            {{else ifCond source '===' 'youtube'}}
                <iframe title="YouTube video" class="embed-responsive-item video-youtube" allow="autoplay; fullscreen" allowfullscreen src="https://www.youtube.com/embed/{{videoId}}?rel=0&autoplay={{urlParams.autoplay}}&controls={{urlParams.controls}}"></iframe>
            {{else ifCond source '===' 'custom'}}
                <iframe title="Custom video" class="embed-responsive-item video-custom" allow="autoplay; fullscreen" allowfullscreen
                src="{{videoId}}"></iframe>
            {{else}}
                <p class="text-center position-absolute top-50">A video has not been provided.</p>
            {{/ifCond}}
        </div>
    </div>
    {{! Render the transcript content in an accordion template }}
</section>
`;function d(e){e.registerPartial("accordion",p),e.registerPartial("backToTop",f),e.registerPartial("banner",u),e.registerPartial("blockquote",m),e.registerPartial("breadcrumbs",g),e.registerPartial("breadcrumbsWrapper",h),e.registerPartial("button",v),e.registerPartial("callout",b),e.registerPartial("callToAction",L),e.registerPartial("card",H),e.registerPartial("containerLayout",V),e.registerPartial("contentFooter",M),e.registerPartial("contentFooterWrapper",k),e.registerPartial("contentPageWithForm",q),e.registerPartial("contentPageWithSideNavigation",Z),e.registerPartial("contentWrapper",y),e.registerPartial("correctincorrect",x),e.registerPartial("customLinks",w),e.registerPartial("dateinput",T),e.registerPartial("directionLinks",S),e.registerPartial("feedbackForm",A),e.registerPartial("followLinks",D),e.registerPartial("footer",P),e.registerPartial("formcheck",O),e.registerPartial("fullPage",R),e.registerPartial("globalAlert",E),e.registerPartial("head",I),e.registerPartial("header",_),e.registerPartial("headerBrand",N),e.registerPartial("homePage",F),e.registerPartial("icon",G),e.registerPartial("image",Q),e.registerPartial("inpageAlert",B),e.registerPartial("inpagenav",j),e.registerPartial("link",W),e.registerPartial("linkColumns",J),e.registerPartial("logo",Y),e.registerPartial("logoCOADeliveringForQLD",U),e.registerPartial("logoCOALandscape",$),e.registerPartial("logoCOALandscape2Lines",z),e.registerPartial("mainContainerWrapper",X),e.registerPartial("metaDcTerms",K),e.registerPartial("metaOpenGraph",e1),e.registerPartial("modal",i1),e.registerPartial("navbar",a1),e.registerPartial("pagination",t1),e.registerPartial("promotionalPanel",C1),e.registerPartial("quickexit",s1),e.registerPartial("searchInput",l1),e.registerPartial("select",o1),e.registerPartial("sidenav",n1),e.registerPartial("sidenavWrapper",r1),e.registerPartial("skipLinks",d1),e.registerPartial("spinner",c1),e.registerPartial("table",p1),e.registerPartial("tabs",f1),e.registerPartial("tag",u1),e.registerPartial("textarea",m1),e.registerPartial("textbox",g1),e.registerPartial("typography",h1),e.registerPartial("video",v1)}typeof Handlebars!="undefined"&&d(Handlebars);var b1=!1;function L1(e){typeof e=="undefined"&&console.error("Handlebars.init requires HandleBars"),typeof e!="undefined"?(b1?console.log("HandleBars Helpers And Partials already loaded, loading again"):b1=!0,r(e),d(e)):console.log("Handlebars not found, init failed")}typeof Handlebars!="undefined"&&L1(Handlebars);})();
//# @qld-gov-au/qgds-bootstrap5 - v2.0.11
//# sourceMappingURL=handlebars.partials.js.map
