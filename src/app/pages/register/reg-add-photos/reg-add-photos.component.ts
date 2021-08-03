import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-reg-add-photos',
  templateUrl: './reg-add-photos.component.html',
  styleUrls: ['../property-registration/property-registration.component.scss']
})
export class RegAddPhotosComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$(".imgAdd").click(function(){
			$(this).closest(".row").find('.imgAdd').before('<div class="col-12 col-md-4 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
		});
		$(document).on("click", "i.del" , function() {
			$(this).parent().remove();
		});
	}

}
