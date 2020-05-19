import { OnInit, Component, ElementRef, Input, HostListener, NgZone, OnDestroy } from '@angular/core';
import { Application, autoDetectRenderer, BaseRenderTexture } from 'pixi.js';

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.css']
})
export class PixiComponent implements OnInit, OnDestroy {
  public app: Application;
  texture = PIXI.Texture.from('assets/sbasnet.gif');
  basnet = new PIXI.Sprite(this.texture);

  @Input()
  public devicePixelRatio = window.devicePixelRatio || 1;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) { }

  init() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application({ transparent: true });
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.resize();
  }

  setup() {
    const container = new PIXI.Container();
    this.app.stage.addChild(container);

    const width = this.elementRef.nativeElement.offsetWidth;
    const height = this.elementRef.nativeElement.offsetHeight;

    this.basnet.anchor.set(0.5);
    this.basnet.position.set(0.5 * width, 0.5 * height);
    console.log(this.basnet.scale);
    this.basnet.scale.set(0.7);

    console.log(this.basnet.scale);
    // add it to the container
    container.addChild(this.basnet);
  }

  ngOnInit(): void {
    this.init();
    this.setup();
  }

  @HostListener('window:resize')
  public resize() {
    const width = this.elementRef.nativeElement.offsetWidth;
    const height = this.elementRef.nativeElement.offsetHeight;
    const viewportScale = 1 / this.devicePixelRatio;
    this.app.renderer.resize(width * this.devicePixelRatio, height * this.devicePixelRatio);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;

    this.basnet.anchor.set(0.5);
    this.basnet.position.set(0.5 * width, 0.5 * height);
    this.basnet.scale.set(0.7);
  }

  destroy() {
    this.app.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

}
