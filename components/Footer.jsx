import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-gray-200/80 bg-linear-to-b from-white to-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4 max-w-md">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="https://i.hd-r.cn/ccbba27f-b9e8-444f-ba64-3b3e6f22953a.png"
              alt="NewTV"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <p className="text-base font-semibold tracking-tight text-gray-900">
                NewTV
              </p>
              <p className="text-sm leading-6 text-gray-500">
                为多源搜索、流媒体播放与弹幕体验打造的开源观影工具。
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-gray-400">
              <span>© 2026 NewTV</span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span>开源项目</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end">
          <Link
            className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            href="/source-browse"
          >
            视频源浏览
          </Link>
          <a
            className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            href="mailto:live4real2018@gmail.com"
          >
            联系作者
          </a>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            href="/help"
          >
            帮助中心
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            href="https://i.hd-r.cn/22b80eef-dd6e-43fa-9afc-9bb2333f3305.png"
          >
            打赏作者
          </Link> 
          <Image
              src="https://i.hd-r.cn/22b80eef-dd6e-43fa-9afc-9bb2333f3305.png"
              width={60}
              height={60}
              className="object-contain"
            />

        </div>
      </div>
    </footer>
  );
};
