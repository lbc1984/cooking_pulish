var ThongBao = function () {
    this.Error = function (NoiDung) {
        Swal.fire({
            icon: 'error',
            type: 'error',
            title: 'Có lỗi...',
            text: NoiDung
        });
    };

    this.Warning = function (NoiDung) {
        Swal.fire({
            icon: 'warning',
            type: 'warning',
            title: 'warning',
            text: NoiDung
        });
    };

    this.Success = function (NoiDung) {
        Swal.fire({
            icon: 'success',
            type: 'success',
            title: 'success',
            text: NoiDung
        });
    };

    this.Info = function (NoiDung) {
        Swal.fire({
            icon: 'info',
            type: 'info',
            title: 'info',
            text: NoiDung
        });
    };

    this.Question = function (NoiDung) {
        Swal.fire({
            icon: 'question',
            type: 'question',
            title: 'question',
            text: NoiDung
        });
    };

    return this;
};

