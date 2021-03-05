var urlAutoCompleteDuocPham;
var urlGetGiaBan;
var urlGetHangTon;
var urlAutoCompleteTenLieuDuocPham;
var urlAutoCompleteKhachHang;
var urlAutoCompleteKhachHang_DoiTac;
var urlAutoCompleteGiaNhapNgayTruoc;
var urlAutoCompleteDanhMucLieuThuoc;

var AutoComplete = function () {
    /**
     * Hàm autoComplete
     * @param {string} controlSanPham - Control tên sản phẩm
     * @param {string} controlMaSanPham - Control mã sản phẩm
     * @param { string} controlFocus - Control nhận focus khi đã thành công
     */
    this.SanPham = function (controlSanPham, controlMaSanPham, controlFocus) {
        var urlPost = "/Product/AutoComplete";

        $("#" + controlSanPham).autocomplete({
            source: function (request, response) {
                $.post(urlPost, { Prefix: request.term }, function (data) {
                    response($.map(data, function (item) {
                        return item;
                    }));
                });
            },
            minLength: 1,
            autoFocus: true
        })
            .autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<div>" +
                        "<a href='/Product/Index?idProduct=" + item.value + "'>" +
                        "<img style='height:50px' src='" + item.image + "' /> " + item.label +
                        "</a>" +
                        "</div> ")
                    .appendTo(ul);
            };
    };

    return this;
};